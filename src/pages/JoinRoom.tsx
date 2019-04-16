import * as React from 'react';
import { withApollo, WithApolloClient } from 'react-apollo';
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
import { AlertNotificationType } from 'src/components/AlertNotification';
import { getAuthObj } from '../AuthUtils';
import {
  GetSessionDocument,
  GetSessionQuery,
  GetSessionQueryVariables,
} from '../generated/graphql';

interface JoinRoomState {
  alertNotification: AlertNotificationType;
  code: string;
  codeFormFeedback: string;
  codeInvalid: boolean;
}

type JoinRoomPropsInternal = WithApolloClient<RouteComponentProps>;

class JoinRoom extends React.Component<JoinRoomPropsInternal> {
  public state: JoinRoomState = {
    alertNotification: {
      alertText: '',
      color: '',
      visible: false,
    },
    code: '',
    codeFormFeedback: 'Code cannot be empty.',
    codeInvalid: false,
  };

  public componentDidMount() {
    const hashArgs = getAuthObj();
    if (hashArgs) {
      localStorage.setItem('accessToken', hashArgs.access_token);
      localStorage.setItem('tokenType', hashArgs.token_type);
    }
  }

  public async getRoom(): Promise<boolean> {
    try {
      const data = await this.props.client.query<
        GetSessionQuery,
        GetSessionQueryVariables
      >({
        query: GetSessionDocument,
        variables: { shortCode: this.state.code },
      });
      if (data.data.Session) {
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  public isCodeValid = async () => {
    if (this.state.code === '') {
      // If the user clicks create a button before entering a room, display validation
      this.setState({
        codeFormFeedback: 'Code cannot be empty.',
        codeInvalid: true,
      });
      return false;
    }
    // GraphQL api
    const exisitingRoom = await this.getRoom();
    if (!exisitingRoom) {
      this.setState({ codeFormFeedback: 'Invalid code.', codeInvalid: true });
      return false;
    }
    this.setState({ codeInvalid: false });
    return true;
  };

  public onJoinRoomBtnClick = async () => {
    if (await this.isCodeValid()) {
      this.props.history.push(`/room/${this.state.code}`);
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
                  placeholder="Enter the code for the room (ex. A6e7)"
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

export default withRouter(withApollo(JoinRoom));
