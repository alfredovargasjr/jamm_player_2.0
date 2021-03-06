import * as React from 'react';
import { MutationFn } from 'react-apollo';
import { NotificationManager } from 'react-notifications';
import { Form, FormGroup, Input, ListGroup } from 'reactstrap';
import {
  CreateTrackComponent,
  CreateTrackMutation,
} from '../generated/graphql';
import spotifyAPIServices from '../services/spotifyAPIServices';
import Track from './Track';

interface SearchState {
  searchResults: SpotifySearchTrackResponse.Item[];
  showDropdown: boolean;
  typing: boolean;
  timeoutId: number;
  searchQuery: string;
  mouseOnComponent: boolean;
  animated: string;
}

interface SearchProps {
  isJoiner: boolean;
  reloadComponents: () => void;
}

export default class Search extends React.Component<SearchProps, SearchState> {
  public state: SearchState = {
    animated: '',
    mouseOnComponent: false,
    searchQuery: '',
    searchResults: [],
    showDropdown: false,
    timeoutId: 0,
    typing: false,
  };
  public node!: HTMLDivElement | null;

  public handleOnClick = async (
    track: TrackWithGID,
    createTrack?: MutationFn<any, any>
  ) => {
    // Send to playlist/suggestions
    const graphId = localStorage.getItem('graphSessionId');
    if (!this.props.isJoiner) {
      const tokenType = localStorage.getItem('tokenType');
      const accessToken = localStorage.getItem('accessToken');
      const playlistId = localStorage.getItem('createdPlaylistId');
      if (tokenType && accessToken && playlistId) {
        try {
          const resultData = await spotifyAPIServices.addTrackToPlaylist(
            tokenType,
            accessToken,
            playlistId,
            track.uri
          );
          if (resultData) {
            NotificationManager.success(
              `"${track.name} by ${track.artists[0].name}"`,
              'Song was added to the playlist'
            );
            this.props.reloadComponents();
            return;
          }
        } catch (ex) {
          NotificationManager.error(
            `"${track.name} by ${track.artists[0].name}"`,
            'Song could not be added'
          );
        }
      }
      return;
    }
    if (graphId && track.id && createTrack) {
      try {
        const data: WrappedDataMutation<
          CreateTrackMutation
        > = (await createTrack({
          variables: { trackID: track.id, sessionGID: graphId },
        })) as WrappedDataMutation<CreateTrackMutation>;
        if (data.data.createTracks) {
          NotificationManager.success(
            `"${track.name} by ${track.artists[0].name}"`,
            'Song was suggested to the playlist'
          );
          return;
        }
      } catch (ex) {
        NotificationManager.error(
          `"${track.name} by ${track.artists[0].name}"`,
          'Song was can not be suggested to the playlist'
        );
        return;
      }
    }
    NotificationManager.error(
      `"${track.name} by ${track.artists[0].name}"`,
      'Error in suggesting the song to the playlist'
    );
    return;
  };

  public handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }

    this.setState({
      searchQuery: e.currentTarget.value,
      timeoutId: (setTimeout(async () => {
        const tokenType = localStorage.getItem('tokenType');
        const accessToken = localStorage.getItem('accessToken');
        if (tokenType && accessToken) {
          const resultData = await spotifyAPIServices.searchTrack(
            tokenType,
            accessToken,
            this.state.searchQuery
          );
          if (resultData) {
            this.setState({ searchResults: resultData.tracks.items });
          }
        }
        this.setState({
          showDropdown: true,
        });
      }, 700) as unknown) as number,
      typing: false,
    });
  }

  public displaySearch() {
    if (this.state.showDropdown) {
      return (
        <ListGroup style={{ boxShadow: '5px 10px #888888' }}>
          {this.state.searchResults.map((track, i) => (
            <CreateTrackComponent>
              {createTrack => (
                <Track
                  key={`${track.id + i}`}
                  track={track}
                  disabled={false}
                  mutationFn={createTrack}
                  handleOnClick={this.handleOnClick}
                />
              )}
            </CreateTrackComponent>
          ))}
        </ListGroup>
      );
    }
    return null;
  }

  public componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }
  public componentWillUnMount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  public handleClick = (e: MouseEvent) => {
    if (this.node && !this.node.contains(e.target as Node)) {
      // click is outside this component
      this.setState({ showDropdown: false });
    }
  };

  public render() {
    const zindex = this.state.showDropdown ? 100 : -1;
    return (
      <div ref={node => (this.node = node)}>
        <Form>
          <FormGroup
            style={{
              margin: 'auto',
              padding: '30px 0 0 0',
              width: '90%',
            }}
          >
            <Input
              name="song"
              id="songSearch"
              placeholder="Search"
              value={this.state.searchQuery}
              onChange={e => this.handleInputChange(e)}
              onClick={() => {
                if (this.state.searchQuery !== '') {
                  this.setState({ showDropdown: true });
                }
              }}
            />
            <div
              style={{
                border: '10px',
                height: '380px',
                margin: 'auto',
                overflow: 'auto',
                position: 'absolute',
                webkitBoxShadow: '0 8px 6px 0px grey',
                width: '81%',
                zIndex: zindex,
              }}
            >
              {this.displaySearch()}
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
