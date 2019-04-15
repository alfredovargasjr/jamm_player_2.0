import * as React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';

interface TrackProps {
  track: SpotifySearchTrackResponse.Item;
}

export default class Track extends React.Component<TrackProps> {
  public state = {
    active: false,
  };

  public handleOnClick() {
    // TODO: Send to playlist/suggestions
  }

  public render() {
    const { track } = this.props;
    return (
      <ListGroupItem
        onMouseOver={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
        active={this.state.active}
        style={{ display: 'flex', cursor: 'pointer' }}
      >
        <img style={{ marginRight: '5px' }} src={track.album.images[2].url} />
        <div>
          <ListGroupItemHeading>{track.name}</ListGroupItemHeading>
          <ListGroupItemText>{track.artists[0].name}</ListGroupItemText>
        </div>
      </ListGroupItem>
    );
  }
}
