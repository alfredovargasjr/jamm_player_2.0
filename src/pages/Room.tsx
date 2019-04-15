import * as React from 'react';
import {
  Link,
  Redirect,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
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
import Track from '../components/Track';
import { GetSessionComponent } from '../generated/graphql';

interface MatchParams {
  code?: string;
}

const RoomParent: React.FunctionComponent<
  RouteComponentProps<MatchParams>
> = props => {
  if (!props.match.params.code) {
    return <Room />;
  }
  return (
    <GetSessionComponent
      variables={{ shortCode: props.match.params.code || '' }}
    >
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;
        if (loading || !data) return 'Loading...';
        if (data.Session) {
          console.log('valid code');
          return <Room code={props.match.params.code} />;
        }
        return <Redirect to="/" />;
      }}
    </GetSessionComponent>
  );
};

class Room extends React.Component<MatchParams> {
  public state = {
    name: '',
    searchResults: [],
    test: false,
    typing: false,
    typingTimeout: 0,
    value: '',
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
      }, 700),
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
    const isJoiner = !!this.props.code;
    console.log(isJoiner);
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
                margin: 'auto',
                width: '90%',
              }}
            >
              <div>
                <Form>
                  <FormGroup
                    style={{
                      margin: 'auto',
                      padding: '30px 0 0 0',
                      width: '90%',
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
          {!isJoiner ? (
            <Col sm={3} md={3} lg={3} style={{ padding: '0' }}>
              <div
                style={{
                  backgroundColor: '#c3c3c3',
                  margin: ' 15px auto',
                  padding: '15px 0',
                  textAlign: 'center',
                  width: '90%',
                }}
              >
                Suggestions
              </div>
              <div style={{ width: '90%', margin: 'auto' }}>
                {this.displaySuggestions()}
              </div>
            </Col>
          ) : null}
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
    paddingBottom: '15px',
    paddingTop: '15px',
  },
};

export default withRouter(RoomParent);
