import querystring from 'querystring';
import * as React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import styles from '../styles';

const generateRandomString = (length: number) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

interface SpotifyAuthProps {
  redirect_uri: string;
}

const SpotifySignIn: React.FunctionComponent<SpotifyAuthProps> = ({
  redirect_uri,
}) => {
  return (
    <Container style={{ padding: '30px' }}>
      <Jumbotron style={styles.jumbotron}>
        <h1 style={{ color: '#1db954' }}>
          Connect To Your Spotify Account To Begin A Session
        </h1>
        <h3 style={{ color: 'white' }}>Sign In To Start Jamming</h3>
        <p>
          <Button
            href={`https://accounts.spotify.com/authorize?${querystring.stringify(
              {
                client_id: 'todo',
                redirect_uri,
                response_type: 'token',
                scope: 'todo',
                state: generateRandomString(15),
              }
            )}`}
            bsStyle="primary"
          >
            <h5>Connect to Spotify</h5>
          </Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default SpotifySignIn;
