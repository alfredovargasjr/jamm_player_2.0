import { request } from 'graphql-request';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Jumbotron,
  Label,
  Row,
} from 'reactstrap';

import { Auth, getAuthObj } from '../AuthUtils';
import AlertNotification from '../components/AlertNotification';
import Loading from '../components/Loading';
import spotifyAPIServices from '../services/spotifyAPIServices';
import SpotifySignIn from './SpotifySignIn';

interface CreateRoomState {
  accessToken: string;
  alertNotification: AlertNotificationType;
  descriptionInput: InputForm;
  isLoading: boolean;
  nameInput: InputForm;
  tokenType: string;
}

interface InputForm {
  errText: string;
  isValid: boolean;
  name: string;
  value: string;
}

interface AlertNotificationType {
  visible: boolean;
  color: string;
  alertText: string;
}

class CreateRoom extends React.Component<any, CreateRoomState> {
  constructor(props: any) {
    super(props);
    this.state = {
      accessToken: '',
      alertNotification: {
        alertText: '',
        color: '',
        visible: false,
      },
      descriptionInput: {
        errText: 'Must enter a room name.',
        isValid: true,
        name: 'descriptionInput',
        value: '',
      },
      isLoading: false,
      nameInput: {
        errText: 'Must enter a room description.',
        isValid: true,
        name: 'nameInput',
        value: '',
      },
      tokenType: '',
    };
  }

  public componentDidMount() {
    const hashArgs = getAuthObj();
    if (hashArgs) {
      this.setState({
        accessToken: hashArgs.access_token,
        tokenType: hashArgs.token_type,
      });
    }
  }

  public async createRoom() {
    const response = await spotifyAPIServices.getUser(
      this.state.tokenType,
      this.state.accessToken
    );
    if (response) {
      const createdPlaylist = await spotifyAPIServices.createPlaylist(
        this.state.tokenType,
        this.state.accessToken,
        this.state.nameInput.value,
        this.state.descriptionInput.value,
        response.id
      );
      if (createdPlaylist) {
        const alertNotification = { ...this.state.alertNotification };
        alertNotification.visible = true;
        alertNotification.color = 'success';
        alertNotification.alertText = 'Room was created.';
        this.setState({ alertNotification });
      }
    } else {
      const alertNotification = { ...this.state.alertNotification };
      alertNotification.visible = true;
      alertNotification.color = 'danger';
      alertNotification.alertText =
        'Spotify session has expired. Return home to reconnect to Spotify.';
      this.setState({ alertNotification });
    }
  }

  public isValidInput(formName: string): boolean {
    switch (formName) {
      case this.state.nameInput.name:
        const nameInput = { ...this.state.nameInput };
        nameInput.isValid = nameInput.value.length > 0;
        this.setState({ nameInput });
        return nameInput.isValid;
      case this.state.descriptionInput.name:
        const descriptionInput = { ...this.state.descriptionInput };
        descriptionInput.isValid = descriptionInput.value.length > 0;
        this.setState({ descriptionInput });
        return descriptionInput.isValid;
      default:
    }
    return true;
  }

  public validateInputs(): boolean {
    const inputForms = [this.state.nameInput, this.state.descriptionInput];
    let areAllValid = true;
    inputForms.forEach(input => {
      if (!this.isValidInput(input.name)) {
        areAllValid = false;
      }
    });
    return areAllValid;
  }

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
                  invalid={!this.state.nameInput.isValid}
                  type="text"
                  name="name"
                  placeholder="Enter a Room Name"
                  onChange={e => {
                    const nameInput = { ...this.state.nameInput };
                    nameInput.value = e.target.value;
                    nameInput.isValid = e.target.value.length > 0;
                    this.setState({ nameInput });
                  }}
                />
                <FormFeedback>{this.state.nameInput.errText}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="roomDescription">Room Description</Label>
                <Input
                  invalid={!this.state.descriptionInput.isValid}
                  type="text"
                  name="description"
                  placeholder="Enter a Room Description"
                  onChange={e => {
                    const descriptionInput = { ...this.state.descriptionInput };
                    descriptionInput.value = e.target.value;
                    descriptionInput.isValid = e.target.value.length > 0;
                    this.setState({ descriptionInput });
                  }}
                />
                <FormFeedback>
                  {this.state.descriptionInput.errText}
                </FormFeedback>
              </FormGroup>
            </Form>
            {/* <Link id="btn btn-secondary" to={`/room${location.hash}`}> */}
            <Button
              onClick={() => {
                if (this.validateInputs()) {
                  this.createRoom();
                }
              }}
            >
              Create Room
            </Button>
            {/* </Link> */}
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

export default CreateRoom;
