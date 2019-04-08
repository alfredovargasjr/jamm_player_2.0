import { request } from 'graphql-request';
import querystring from 'querystring';
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

export interface Props {
  length: number;
}

const generateRandomString = ({ length }: Props) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

class CreateRoom extends React.Component<Props> {

  public const spotifySignIn = () => (
    <Container style={{ padding: '30px' }}>
      <Jumbotron style={styles.jumbotron}>
        <h1 style={{ color:'#1db954' }}>Connect To Your Spotify Account To Begin A Session</h1>
        <h3 style={{ color: 'white' }}>Sign In To Start Jamming</h3>
        <p>
          <Button href={`https://accounts.spotify.com/authorize?${querystring.stringify({
            response_type: 'token',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
          })}`} bsStyle="primary" >
            <h5>Connect to Spotify</h5>
          </Button>
       </p>
      </Jumbotron>
    </Container>
  );
  
  public render() {
    const { length } = this.props;
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
            <Link id="btn btn-secondary" to="/createroom">
              <Button style={styles.button}>Create</Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    );
  }


  // const spotifySignIn = () => {
  //   return (
  //     <Container style={{ padding: '30px' }}>
  //       <Jumbotron style={styles.JammJumbo}>
  //         <h1 style={{ color: "#1db954" }}>Connect To Your Spotify Account To Begin A Session</h1>
  //         <h3 style={{ color: "white" }}>Sign In To Start Jamming</h3>
  //         <p>
  //           <Button href={'https://accounts.spotify.com/authorize?' +
  //             querystring.stringify({
  //               response_type: 'token',
  //               client_id: client_id,
  //               scope: scope,
  //               redirect_uri: redirect_uri,
  //               state: state
  //             })
  //           } bsStyle="primary"><h5>Connect to Spotify</h5></Button>
  //         </p>
  //       </Jumbotron>
  //     </Container>
  //   );
  // }
}

const styles = {
  row: {
    marginRight: '0px',
    marginLeft: '0px',
    paddingTop: '15px',
  },
  col: {
    paddingTop: '15px',
  },
  jumbotron: {
    backgroundColor: 'rgb(45, 45, 45)',
    color: '#1db954',
    width: '100%',
    marginBottom: '0px',
    padding: '20px',
    borderRadius: '0px',
  },
  button: {},
};

export default CreateRoom;
