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
                />
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
            <Link id="btn btn-secondary" to={`/room${location.hash}`}>
              <Button>Create</Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default CreateRoom;
