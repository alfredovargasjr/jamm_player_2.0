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
  disabled: boolean;
  mutationFn?: MutationFn<any, any>;
  handleOnClick?: (
    track: TrackWithGID,
    mutationFn?: MutationFn<any, any>
  ) => void;
}

interface TrackState {
  active: boolean;
}

export default class Track extends React.Component<TrackProps, TrackState> {
  public state = {
    active: false,
  };

  public render() {
    const { disabled, handleOnClick, mutationFn, track } = this.props;
    return (
      <ListGroupItem
        onMouseOver={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
        active={!disabled && this.state.active}
        onClick={() => {
          if (!disabled && handleOnClick) {
            handleOnClick(track, mutationFn);
          }
        }}
        style={{ display: 'flex', cursor: !disabled ? 'pointer' : '' }}
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
