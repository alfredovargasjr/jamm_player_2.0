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

interface JoinRoomState {
  code: string;
  codeFormFeedback: string;
  codeInvalid: boolean;
}
class JoinRoom extends React.Component<RouteComponentProps> {
  public state: JoinRoomState = {
    code: '',
    codeFormFeedback: 'Code cannot be empty.',
    codeInvalid: false,
  };
  public isCodeValid = () => {
    if (this.state.code === '') {
      // If the user clicks create a button before entering a room, display validation
      this.setState({
        codeFormFeedback: 'Code cannot be empty.',
        codeInvalid: true,
      });
      return false;
    }
    // TODO: Send API request here and validate the code
    const failedValidaton = false;
    if (failedValidaton) {
      this.setState({ codeFormFeedback: 'Invalid code.', codeInvalid: true });
      return false;
    }

    this.setState({ codeInvalid: false });

    return true;
  };

  public onJoinRoomBtnClick = () => {
    if (this.isCodeValid()) {
      this.props.history.push(`/room/${this.state.code}${location.hash}`);
    }
  };

  public render() {
    return (
      <Container style={{ maxWidth: '1000px', margin: 'auto' }}>
        <Card>
          <CardHeader tag="h3">Join a Room</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="code">Code</Label>
                <Input
                  type="text"
                  placeholder="Enter the code for the room"
                  value={this.state.code}
                  onChange={e =>
                    this.setState({ code: e.target.value, codeInvalid: false })
                  }
                  valid={this.state.code !== ''}
                  invalid={this.state.codeInvalid}
                />
                <FormFeedback>{this.state.codeFormFeedback}</FormFeedback>
              </FormGroup>
            </Form>
            <Button onClick={this.onJoinRoomBtnClick}>Join Room</Button>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default withRouter(JoinRoom);
