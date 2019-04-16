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
import { deleteTrackRequest } from '../graphQL/mutations';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface TrackProps {
  track: TrackWithGID;
  isJoiner: boolean;
  disabled: boolean;
  animated: string;
  mutationFn: MutationFn<any, any>;
  handleOnClick: (
    track: TrackWithGID,
    mutationFn?: MutationFn<any, any>
  ) => void;
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

  public animate = (animateType: 'successAnimated' | 'failureAnimated') => {
    if (this.state.animated === '') {
      this.setState({ animated: animateType });
      setTimeout(() => {
        this.setState({ animated: '' });
      }, 1500);
    }
  };

  public render() {
    const { disabled, handleOnClick, mutationFn, track, animated } = this.props;
    return (
      <ListGroupItem
        className={animated}
        onMouseOver={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
        active={this.state.active}
        onClick={() => {
          console.log('click', handleOnClick);
          if (!disabled) {
            handleOnClick(track, mutationFn);
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
    );
  }
}
