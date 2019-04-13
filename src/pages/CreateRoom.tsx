import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

interface CreateRoomState {
  roomName: string;
  roomDescription: string;
  roomNameInvalid: boolean;
}

class CreateRoom extends React.Component<RouteComponentProps> {
  public state: CreateRoomState = {
    roomDescription: '',
    roomName: '',
    roomNameInvalid: false,
  };
  public onCreateRoomBtnClick = () => {
    if (this.state.roomName !== '') {
      // TODO: Send API request here

      this.props.history.push(`/room${location.hash}`);
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
                <FormFeedback>Room Name cannot be empty.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="roomDescription">Room Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Enter a Room Description"
                />
              </FormGroup>
            </Form>
            <Button onClick={this.onCreateRoomBtnClick}>Create Room</Button>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default withRouter(CreateRoom);
