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

import {
  ApolloConsumerProps,
  withApollo,
  WithApolloClient,
} from 'react-apollo';
import { generateRandomString, getAuthObj } from '../AuthUtils';
import AlertNotification, {
  AlertNotificationType,
} from '../components/AlertNotification';
import Loading from '../components/Loading';
import {
  CreateSessionMutation,
  CreateSessionMutationVariables,
} from '../generated/graphql';
import { createSession } from '../graphQL/mutations';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface CreateRoomState {
  alertNotification: AlertNotificationType;
  isLoading: boolean;
  roomName: string;
  roomDescription: string;
  roomNameInvalid: boolean;
}

type CreateRoomPropsInternal = WithApolloClient<RouteComponentProps>;

class CreateRoom extends React.Component<CreateRoomPropsInternal> {
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
          // GRAPHQL CREATE ROOM
          const short = generateRandomString(4);
          try {
            const data = await this.props.client.mutate<
              CreateSessionMutation,
              CreateSessionMutationVariables
            >({
              mutation: createSession,
              variables: { sessionID: createdPlaylist.id, shortCode: short },
            });
            if (data.data.createSession) {
              localStorage.setItem(
                'graphSessionShortCode',
                data.data.createSession.shortCode
              );
              this.props.history.push(`/room${location.hash}`);
            }
          } catch (e) {
            const alertNotification = { ...this.state.alertNotification };
            alertNotification.visible = true;
            alertNotification.color = 'danger';
            alertNotification.alertText = e.message;
            this.setState({ alertNotification });
          }
        }
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

  public onCreateRoomBtnClick = async () => {
    if (this.state.roomName !== '') {
      await this.createRoom();
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
            <Button onClick={() => this.onCreateRoomBtnClick()}>
              Create Room
            </Button>
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

export default withRouter(withApollo(CreateRoom));
