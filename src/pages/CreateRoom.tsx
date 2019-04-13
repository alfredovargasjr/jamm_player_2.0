import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';

import { getAuthObj } from '../AuthUtils';
import AlertNotification from '../components/AlertNotification';
import Loading from '../components/Loading';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface AlertNotificationType {
  visible: boolean;
  color: string;
  alertText: string;
}
interface CreateRoomState {
  alertNotification: AlertNotificationType;
  isLoading: boolean;
  roomName: string;
  roomDescription: string;
  roomNameInvalid: boolean;
}

class CreateRoom extends React.Component<RouteComponentProps> {
  public state: CreateRoomState = {
    alertNotification: {
      alertText: '',
      color: '',
      visible: false,
    },
    isLoading: false,
    roomDescription: '',
    roomName: '',
    roomNameInvalid: false,
  };

  public componentDidMount() {
    const hashArgs = getAuthObj();
    if (hashArgs) {
      localStorage.setItem('accessToken', hashArgs.access_token);
      localStorage.setItem('tokenType', hashArgs.token_type);
    }
  }

  public async createRoom() {
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && tokenType) {
      this.setState({ isLoading: true });
      const user = await spotifyAPIServices.getUser(tokenType, accessToken);
      if (user) {
        const createdPlaylist = await spotifyAPIServices.createPlaylist(
          tokenType,
          accessToken,
          this.state.roomName,
          this.state.roomDescription,
          user.id
        );
        if (createdPlaylist) {
          localStorage.setItem('createdPlaylistId', createdPlaylist.id);
          this.props.history.push(`/room${location.hash}`);
        }
      } else {
        this.setState({ isLoading: false });
        const alertNotification = { ...this.state.alertNotification };
        alertNotification.visible = true;
        alertNotification.color = 'danger';
        alertNotification.alertText =
          'Spotify session has expired. Return home to reconnect to Spotify.';
        this.setState({ alertNotification });
      }
    }
  }

  public onCreateRoomBtnClick = () => {
    if (this.state.roomName !== '') {
      this.createRoom();
    } else if (!this.state.roomName) {
      // If the user clicks create a button before entering a room, display validation
      this.setState({ roomNameInvalid: true });
    }
  };

  public render() {
    return (
      <Container style={{ maxWidth: '1000px', margin: 'auto' }}>
        <Card>
          <CardHeader tag="h3">Create a Room</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="roomName">Room Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter a Room Name"
                  value={this.state.roomName}
                  onChange={e =>
                    this.setState({
                      roomName: e.target.value,
                      roomNameInvalid: false,
                    })
                  }
                  valid={this.state.roomName !== ''}
                  invalid={this.state.roomNameInvalid}
                />
                <FormFeedback>Room name can not be empty.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="roomDescription">Room Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Enter a Room Description"
                  onChange={e => {
                    this.setState({
                      roomDescription: e.target.value,
                    });
                  }}
                />
              </FormGroup>
            </Form>
            <Button onClick={this.onCreateRoomBtnClick}>Create Room</Button>
            {this.state.alertNotification.visible ? (
              <AlertNotification
                visible={this.state.alertNotification.visible}
                color={this.state.alertNotification.color}
                alertText={this.state.alertNotification.alertText}
              />
            ) : null}
            {this.state.isLoading ? <Loading /> : null}
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default withRouter(CreateRoom);
