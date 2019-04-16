import * as React from 'react';
import { NotificationManager } from 'react-notifications';
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
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Row,
} from 'reactstrap';
import Loading from '../components/Loading';
import PlaylistTracks from '../components/PlaylistTracks';
import Search from '../components/Search';
import SpotifyPlaylist from '../components/SpotifyPlaylist';
import Suggestions from '../components/Suggestions';
import { GetSessionComponent, GetSessionQuery } from '../generated/graphql';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface MatchParams {
  code?: string;
}

const RoomParent: React.FunctionComponent<
  RouteComponentProps<MatchParams>
> = props => {
  return (
    <GetSessionComponent
      variables={{
        shortCode:
          props.match.params.code ||
          localStorage.getItem('graphSessionShortCode') ||
          '',
      }}
    >
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;
        if (loading || !data) return 'Loading...';
        if (data.Session) {
          localStorage.setItem('graphSessionId', data.Session.id);
          if (!props.match.params.code) {
            return <Room session={data} />;
          }
          return <Room code={props.match.params.code} session={data} />;
        }
        return <Redirect to="/" />;
      }}
    </GetSessionComponent>
  );
};

interface RoomProps {
  session: GetSessionQuery;
}

interface RoomState {
  roomCode: string;
  roomData?: SpotifyGetPlaylistResponse.RootObject;
  refreshCounter: number;
  hasReloadingNotification: boolean;
  name: string;
}

class Room extends React.Component<MatchParams & RoomProps, RoomState> {
  public state: RoomState = {
    hasReloadingNotification: false,
    name: '',
    refreshCounter: 0,
    roomCode: '',
    roomData: undefined,
  };

  public async componentDidMount() {
    if (!!!this.props.code) {
      const shortCode = localStorage.getItem('graphSessionShortCode');
      if (shortCode) {
        this.setState({ roomCode: shortCode });
      }
    } else {
      this.setState({ roomCode: this.props.code });
    }
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    if (this.props.session.Session && tokenType && accessToken) {
      const playlistId = this.props.session.Session.sessionID;
      const hostId = this.props.session.Session.hostID;
      const playlistData = await spotifyAPIServices.getPlaylist(
        tokenType,
        accessToken,
        hostId,
        playlistId
      );
      if (playlistData) {
        this.setState({ roomData: playlistData });
      }
    }
  }

  // TODO: Get list of suggestions and display suggestions
  public async displaySuggestions() {
    return <div />;
  }

  public refreshIframePlaylist = () => {
    if (this.state.hasReloadingNotification) {
      return;
    }

    this.setState({
      hasReloadingNotification: true,
    });
    const ms = 30000;
    NotificationManager.info(
      'Spotify Playlist will autoreload in 30 seconds because of a delay in the Spotify API',
      'Reloading...',
      ms
    );
    setTimeout(() => {
      this.setState({
        hasReloadingNotification: false,
        refreshCounter: this.state.refreshCounter + 1,
      });
    }, ms);
  };

  // TODO: Retrieve user and session code to display

  public render() {
    const isJoiner = !!this.props.code;
    if (!this.state.roomData) {
      return <Loading />;
    }
    return (
      <div>
        <div>
          <Jumbotron style={styles.jumbotron}>
            <h1
              style={{
                fontSize: '60px',
                marginBottom: '0px',
                marginLeft: '83px',
                textAlign: 'left',
              }}
            >
              <b>{this.state.roomData && this.state.roomData.name}</b>
            </h1>
            <p
              style={{
                color: 'white',
                fontSize: '13px',
                margin: '0px',
                marginLeft: '88px',
                textAlign: 'left',
              }}
            >
              {this.state.roomData.description}
            </p>
          </Jumbotron>
          <div style={styles.page}>
            <Row style={{ width: '100%' }}>
              <Col style={{ padding: '0', textAlign: 'left' }}>
                <Row style={{ margin: '0 20%', textAlign: 'left' }}>
                  Hosted by {this.state.roomData.owner.display_name}
                </Row>
                <Row style={{ margin: '30px 20%', textAlign: 'left' }}>
                  Share Code:
                  <b style={{ marginLeft: '5px' }}>{this.state.roomCode}</b>
                </Row>
              </Col>
              <Col style={{ padding: '0' }} />
            </Row>
          </div>
        </div>
        {isJoiner ? (
          <div>
            <Row style={{ backgroundColor: '#d5d5d5', margin: '0' }}>
              <Col sm={12} md={12} lg={12} style={{ padding: '0' }}>
                <div
                  style={{
                    margin: 'auto',
                    width: '90%',
                  }}
                >
                  <div>
                    <Search
                      isJoiner={isJoiner}
                      reloadComponents={this.refreshIframePlaylist}
                    />
                  </div>
                  <div style={{ width: '90%', margin: 'auto' }}>
                    <GetSessionComponent
                      variables={{
                        shortCode:
                          localStorage.getItem('graphSessionShortCode') || '',
                      }}
                      pollInterval={500}
                    >
                      {({ loading, error, data }) => {
                        if (error) return `Error! ${error.message}`;
                        if (loading || !data) return 'Loading...';
                        if (data.Session) {
                          const playlistId = data.Session.sessionID;
                          const hostId = data.Session.hostID;
                          if (playlistId && hostId) {
                            return (
                              <PlaylistTracks
                                playlistId={playlistId}
                                hostId={hostId}
                                isJoiner={isJoiner}
                              />
                            );
                          }
                        }
                        return <Loading />;
                      }}
                    </GetSessionComponent>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <Row style={{ backgroundColor: '#d5d5d5', margin: '0' }}>
              <Col sm={9} md={12} lg={6} style={{ padding: '0' }}>
                <div
                  style={{
                    margin: 'auto',
                    width: '90%',
                  }}
                >
                  <div>
                    <Search
                      isJoiner={isJoiner}
                      reloadComponents={this.refreshIframePlaylist}
                    />
                  </div>
                  <div style={{ width: '90%', margin: 'auto' }}>
                    <SpotifyPlaylist
                      key={this.state.refreshCounter}
                      ownerId={this.state.roomData.owner.id}
                      playlistId={this.state.roomData.id}
                    />
                  </div>
                </div>
              </Col>
              <Col sm={3} md={3} lg={6} style={{ padding: '0' }}>
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
                  <GetSessionComponent
                    variables={{
                      shortCode:
                        localStorage.getItem('graphSessionShortCode') || '',
                    }}
                    // pollInterval={500}
                  >
                    {({ loading, error, data }) => {
                      if (error) return `Error! ${error.message}`;
                      if (loading || !data) return 'Loading...';
                      if (data.Session) {
                        if (data.Session.trackses) {
                          return (
                            <Suggestions
                              isJoiner={isJoiner}
                              tracks={data.Session.trackses}
                            />
                          );
                        }
                      }
                      return <Loading />;
                    }}
                  </GetSessionComponent>
                </div>
              </Col>
            </Row>
          </div>
        )}
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
    padding: '0px',
    paddingLeft: '20px',
    paddingRight: '20px',
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
