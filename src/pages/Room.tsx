import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import {
  Alert,
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Jumbotron,
  Row,
} from 'reactstrap';
import { getAuthObj } from '../AuthUtils';

class Room extends React.Component<RouteComponentProps> {
  public render() {
    const authObj = getAuthObj();
    if (!authObj) {
      return <Alert color="danger">You are not authorized!</Alert>;
    }
    return (
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <Jumbotron style={styles.jumbotron}>
          <h1 style={{ textAlign: 'center', fontSize: '70px' }}>
            <b>Jamm.</b>
          </h1>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'white' }}>
            This is a room
          </p>
        </Jumbotron>
        <Row style={styles.row} />
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

export default withRouter(Room);
