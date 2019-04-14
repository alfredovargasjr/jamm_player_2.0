import querystring from 'querystring';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button, Container, Jumbotron } from 'reactstrap';
import { generateRandomString } from '../AuthUtils';
import styles from '../styles';

type RedirectTypes = 'create' | 'join';

interface SearchParms {
  redirect: RedirectTypes;
}

const SpotifySignIn: React.FunctionComponent<RouteComponentProps> = props => {
  const searchParmObject = (querystring.parse(
    props.location.search.slice(1)
  ) as unknown) as SearchParms;
  const redirectUri =
    searchParmObject.redirect === 'create'
      ? `${location.origin}/createroom`
      : `${location.origin}/joinroom`;
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
                client_id: 'f18adfa22eb64b1b9a74ce823ca80b3b',
                redirect_uri: redirectUri,
                response_type: 'token',
                scope:
                  'user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-read-collaborative',
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

export default withRouter(SpotifySignIn);
