import * as React from 'react';
import { MutationFn } from 'react-apollo';
import { NotificationManager } from 'react-notifications';
import { Form, FormGroup, Input, ListGroup } from 'reactstrap';
import { deleteTrackRequest } from 'src/graphQL/mutations';
import {
  CreateTrackComponent,
  CreateTrackMutation,
  CreateTrackMutationVariables,
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
    console.log('start graph', graphId, track.id, createTrack);
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

  public animate = (animateType: 'successAnimated' | 'failureAnimated') => {
    if (this.state.animated === '') {
      this.setState({ animated: animateType });
      setTimeout(() => {
        this.setState({ animated: '' });
      }, 1500);
    }
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
        <ListGroup>
          {this.state.searchResults.map((track, i) => (
            <CreateTrackComponent>
              {(createTrack, { loading, error }) => (
                <Track
                  isJoiner={this.props.isJoiner}
                  key={`${track.id + i}`}
                  track={track}
                  disabled={false}
                  mutationFn={createTrack}
                  animated={this.state.animated}
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
    const zindex = this.state.showDropdown ? 100 : 0;
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
          </FormGroup>
        </Form>
        <div
          style={{
            height: '380px',
            // marginLeft: '43px',
            overflow: 'auto',
            position: 'absolute',
            // width: '70%',
            zIndex: zindex,
          }}
        >
          {this.displaySearch()}
        </div>
      </div>
    );
  }
}
