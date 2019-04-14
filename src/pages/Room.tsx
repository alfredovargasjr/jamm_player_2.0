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
    name: '',
    typing: false,
    typingTimeout: 0,
  };

  public handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState({
      typing: false,
      typingTimeout: setTimeout(() => {
        // TODO: Spotify API request
        this.setState({
          test: true,
        });
      }, 3000),
      value: e.currentTarget.value,
    });
    console.log(this.state);
  }

  // TODO: Request search from Spotify API and display searches
  public displaySearch(test: boolean) {
    if (test) {
      return <Track />;
    }
    return null;
  }

  // TODO: Get list of suggestions and display suggestions
  public displaySuggestions() {
    return <Track />;
  }

  // TODO: Retrieve user and session code to display

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
        <Row style={{ backgroundColor: '#d5d5d5', margin: '0' }}>
          <Col sm={9} md={9} lg={9} style={{ padding: '0' }}>
            <div
              style={{
                width: '90%',
                margin: 'auto',
              }}
            >
              <div>
                <Form>
                  <FormGroup
                    style={{
                      padding: '30px 0 0 0',
                      width: '90%',
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
                <div style={{ width: '90%', margin: 'auto' }}>
                  {this.displaySearch(this.state.test)}
                </div>
              </div>
              <div style={{ width: '90%', margin: 'auto' }}>
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
          </Col>
          <Col sm={3} md={3} lg={3} style={{ padding: '0' }}>
            <div
              style={{ padding: '15px 0', width: '90%', margin: ' 15px auto', backgroundColor: '#c3c3c3', textAlign: 'center' }}
            >
              Suggestions
            </div>
            <div
              style={{ width: '90%', margin: 'auto' }}
            >
              {this.displaySuggestions()}
            </div>
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
