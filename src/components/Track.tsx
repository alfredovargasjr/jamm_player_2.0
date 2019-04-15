import * as React from 'react';
import { MutationFn } from 'react-apollo';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import {
  CreateTrackComponent,
  CreateTrackMutation,
  CreateTrackMutationVariables,
} from '../generated/graphql';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface TrackProps {
  track: SpotifySearchTrackResponse.Item;
  isJoiner: boolean;
  disabled: boolean;
}

interface TrackState {
  active: boolean;
  animated: string;
}

export default class Track extends React.Component<TrackProps, TrackState> {
  public state = {
    active: false,
    animated: '',
  };

  public handleOnClick = async (
    createTrack: MutationFn<CreateTrackMutation, CreateTrackMutationVariables>
  ) => {
    // Send to playlist/suggestions
    const { track } = this.props;
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
            this.animate('successAnimated');
            return;
          }
        } catch (ex) {
          this.animate('failureAnimated');
        }
      }
      return;
    }
    const graphId = localStorage.getItem('graphSessionId');
    if (graphId) {
      try {
        const data: WrappedDataMutation<
          CreateTrackMutation
        > = (await createTrack({
          variables: { trackID: track.id, sessionGID: graphId },
        })) as WrappedDataMutation<CreateTrackMutation>;
        if (data.data.createTracks) {
          this.animate('successAnimated');
          return;
        }
      } catch (ex) {
        this.animate('failureAnimated');
        return;
      }
    }
    this.animate('failureAnimated');
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

  public render() {
    const { track } = this.props;
    return (
      <CreateTrackComponent>
        {(createTrack, { loading, error }) => (
          <ListGroupItem
            className={this.state.animated}
            onMouseOver={() => this.setState({ active: true })}
            onMouseLeave={() => this.setState({ active: false })}
            active={this.state.active}
            onClick={() => {
              if (!this.props.disabled) {
                this.handleOnClick(createTrack);
              }
            }}
            style={{ display: 'flex', cursor: 'pointer' }}
          >
            <img
              style={{
                marginRight: '5px',
                maxHeight: '64px',
                paddingRight: '5px',
              }}
              src={track.album.images[2].url}
            />
            <div>
              <ListGroupItemHeading>{track.name}</ListGroupItemHeading>
              <ListGroupItemText>
                {track.artists.map(artists => artists.name).join(', ')}
              </ListGroupItemText>
            </div>
          </ListGroupItem>
        )}
      </CreateTrackComponent>
    );
  }
}
