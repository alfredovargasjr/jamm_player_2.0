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
import { GetSessionComponent, GetSessionQuery } from '../generated/graphql';
import spotifyAPIServices from '../services/spotifyAPIServices';
import Search from '../components/Search';

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
          console.log(data);
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

  name: string;
}

class Room extends React.Component<MatchParams & RoomProps, RoomState> {
  public state: RoomState = {
    name: '',
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
        console.log(this.state.roomData);
      }
    }
  }

  // TODO: Get list of suggestions and display suggestions
  public displaySuggestions() {
    return <div />;
  }

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
            <h1 style={{ textAlign: 'left', fontSize: '60px' }}>
              <b>{this.state.roomData && this.state.roomData.name}</b>
            </h1>
            <p
              style={{
                color: 'white',
                fontSize: '13px',
                margin: '0px',
                textAlign: 'left',
              }}
            >
              {this.state.roomData.description}
            </p>
          </Jumbotron>
          <div style={styles.page}>
            <Row style={{ width: '100%' }}>
              <Col style={{ padding: '0' }}>
                <Row style={{ margin: '0 20%' }}>
                  Hosted by {this.state.roomData.owner.display_name}
                </Row>
                <Row style={{ margin: '30px 20%' }}>
                  Share Code:
                  <b style={{ marginLeft: '5px' }}>{this.state.roomCode}</b>
                </Row>
              </Col>
              <Col style={{ padding: '0' }} />
            </Row>
          </div>
        </div>
        <Row style={{ backgroundColor: '#d5d5d5', margin: '0' }}>
          <Col sm={9} md={12} lg={6} style={{ padding: '0' }}>
            <div
              style={{
                margin: 'auto',
                width: '90%',
              }}
            >
              <div>
                <Search />
              </div>
              <div style={{ width: '90%', margin: 'auto' }}>
                <iframe
                  id="player"
                  // tslint:disable-next-line: max-line-length
                  src="https://open.spotify.com/embed?uri=spotify:user:alfredovargas:playlist:6XL4uoitJree2nBmD5zMmF&amp;view=coverart"
                  width="100%"
                  height="380"
                  allow="encrypted-media"
                  style={{ marginTop: '30px' }}
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
