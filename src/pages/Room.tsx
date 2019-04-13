import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import {
  Alert,
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Row,
} from 'reactstrap';
import { getAuthObj } from '../AuthUtils';
import Track from '../components/Track';

class Room extends React.Component<RouteComponentProps> {
  public state = {
    test: false,
    value: '',
    searchResults: [],
  };

  public handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      test: true,
      value: e.currentTarget.value,
    });
    console.log(this.state);
  }

  public displaySearch(test: boolean) {
    if (test) {
      return <Track />;
    }
    return null;
  }

  // public displayTracks(
  //   bool: boolean,
  //   tracks,
  //   handleTrackClick,
  //   clickable: boolean
  // ) {
  //   console.log('does this appear in displayTracks?', handleTrackClick);
  //   const tracksDisplay = [];
  //   if (bool) {
  //     for (var e in tracks) {
  //       tracksDisplay.push(
  //         <Track
  //           onTrackClick={handleTrackClick}
  //           trackInfo={tracks[e]}
  //           clickable={clickable}
  //         />
  //       );
  //     }
  //   }
  //   return tracksDisplay;
  // }

  public render() {
    const authObj = getAuthObj();
    if (!authObj) {
      return <Alert color="danger">You are not authorized!</Alert>;
    }

    return (
      <div>
        <div>
          <Jumbotron style={styles.jumbotron}>
            <h1 style={{ textAlign: 'center', fontSize: '70px' }}>
              <b>Jamm.</b>
            </h1>
            <p
              style={{ textAlign: 'center', fontSize: '13px', color: 'white' }}
            >
              This is a room
            </p>
          </Jumbotron>
          <div style={styles.page}>
            <Row style={{ width: '100%' }}>
              <Col style={{ padding: '0' }}>
                <Row style={{ margin: '0 20%' }}>Hosted by </Row>
                <Row style={{ margin: '30px 20%' }}>Share Code:</Row>
              </Col>
              <Col style={{ padding: '0' }} />
            </Row>
          </div>
        </div>
        <div style={{ backgroundColor: '#d5d5d5' }}>
          <div
            style={{
              maxWidth: '1000px',
              margin: 'auto',
            }}
          >
            <div>
              <Form>
                <FormGroup
                  style={{
                    padding: '30px 0 0 0',
                    width: '80%',
                    margin: 'auto',
                  }}
                >
                  <Input
                    name="song"
                    id="songSearch"
                    placeholder="Search"
                    value={this.state.value}
                    onChange={e => this.handleInputChange(e)}
                  />
                </FormGroup>
              </Form>
              <div style={{ width: '80%', margin: 'auto' }}>
                {this.displaySearch(this.state.test)}
              </div>
            </div>
            <div style={{ width: '80%', margin: 'auto' }}>
              <iframe
                id="player"
                // tslint:disable-next-line: max-line-length
                src="https://open.spotify.com/embed?uri=spotify:user:1228847548:playlist:37i9dQZF1DWWQRwui0ExPn&amp;view=coverart"
                width="100%"
                height="380"
                allow="encrypted-media"
                style={{ marginTop: '30px' }}
              />
            </div>
          </div>
        </div>
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
    padding: '60px',
    width: '100%',
  },
  page: {
    backgroundColor: 'rgb(45, 45, 45)',
    color: 'white',
  },
  row: {
    marginLeft: '0px',
    marginRight: '0px',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
};

export default withRouter(Room);
