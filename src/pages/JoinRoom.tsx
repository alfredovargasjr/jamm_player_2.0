import { request } from 'graphql-request';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Row,
} from 'reactstrap';

class CreateRoom extends React.Component {
  public state = {
    code: '',
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
                  name="name"
                  placeholder="Enter a code for the room"
                />
              </FormGroup>
            </Form>
            <Link
              id="btn btn-secondary"
              to={`/room/${this.state.code}${location.hash}`}
            >
              <Button>Join Room</Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default CreateRoom;
