import * as React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';

interface TrackProps {
  track: SpotifySearchTrackResponse.Item;
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

  public handleOnClick = () => {
    // TODO: Send to playlist/suggestions
    this.animate('successAnimated');
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
      <ListGroupItem
        className={this.state.animated}
        onMouseOver={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
        active={this.state.active}
        onClick={this.handleOnClick}
        style={{ display: 'flex', cursor: 'pointer' }}
      >
        <img style={{ marginRight: '5px' }} src={track.album.images[2].url} />
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
