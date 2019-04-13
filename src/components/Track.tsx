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

export default class Track extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const trackInfo = this.props;
    return (
      <Row style={styles.songcard}>
        <Col sm={2} xs={2} lg={1} fluid="true" style={{padding: '0'}}>
          {/* <img src={trackInfo.albumArt} /> */}
          <img src="https://via.placeholder.com/67"/>
        </Col>
        <Col sm={10} xs={10} lg={11} fluid="true">
          <ListGroup>
            <ListGroupItem style={{ border: '0px', padding: '5px 0' }}>
              {/* {trackInfo.artistName} */}
              hi
            </ListGroupItem>
            <ListGroupItem style={{ border: '0px', padding: '5px 0' }}>
              {/* {trackInfo.songName} */}
              hello
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
    color: 'black',
    width: '100%',
    backgroundColor: 'white',
    margin: '0',
  },
};
