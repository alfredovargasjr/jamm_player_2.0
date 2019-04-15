import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

interface TrackProps {
  track: SpotifySearchTrackResponse.Item;
}

export default class Track extends React.Component<TrackProps> {
  public handleOnClick() {
    // TODO: Send to playlist/suggestions
  }

  public render() {
    const { track } = this.props;
    return (
      <Row style={styles.songcard} onClick={this.handleOnClick}>
        <Col sm={2} xs={2} lg={1} fluid="true" style={{ padding: '0' }}>
          <img src={track.album.images[2].url} />
        </Col>
        <Col sm={10} xs={10} lg={11} fluid="true">
          <ListGroup>
            <ListGroupItem style={{ border: '0px', padding: '5px 0' }}>
              {track.name}
              artist name
            </ListGroupItem>
            <ListGroupItem style={{ border: '0px', padding: '5px 0' }}>
              {track.artists[0].name}
              song name
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

const styles = {
  button: {
    width: '100%',
  },
  col: {
    paddingTop: '15px',
  },
  jumbotron: {
    backgroundColor: 'rgb(45, 45, 45)',
    borderRadius: '0px',
    color: '#1db954',
    marginBottom: '0px',
    padding: '20px',
    width: '100%',
  },
  row: {
    marginLeft: '0px',
    marginRight: '0px',
    paddingTop: '15px',
  },
  songcard: {
    backgroundColor: 'white',
    color: 'black',
    margin: '0',
    width: '100%',
  },
};
