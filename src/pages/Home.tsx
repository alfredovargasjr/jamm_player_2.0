import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Jumbotron,
  Row,
} from 'reactstrap';

class Home extends React.Component {
  public render() {
    return (
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <Jumbotron style={styles.jumbotron}>
          <h1 style={{ textAlign: 'center', fontSize: '70px' }}>
            <b>Jamm.</b>
          </h1>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'white' }}>
            A Collaborative Web Music Player powered by Spotify.
          </p>
        </Jumbotron>
        <Row style={styles.row}>
          <Col sm="6" style={styles.col}>
            <Card body={true} className="text-center">
              <CardTitle>Create and Share a Room With Friends</CardTitle>
              <Link id="btn btn-secondary" to="/createroom">
                <Button style={styles.button}>Create</Button>
              </Link>
            </Card>
          </Col>
          <Col sm="6" style={styles.col}>
            <Card body={true} className="text-center">
              <CardTitle>Join a Room</CardTitle>
              <Link id="btn btn-secondary" to="/joinroom">
                <Button style={styles.button}>Join</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
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
};

export default Home;
