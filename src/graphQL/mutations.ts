import gql from 'graphql-tag';

const deleteTrackRequest = gql`
  mutation deleteTrackRequest($graphID: ID!) {
    deleteTracks(id: $graphID) {
      id
      trackID
    }
  }
`;

const createSession = gql`
  mutation createSession($sessionID: String!) {
    createSession(sessionID: $sessionID) {
      id
    }
  }
`;

const addTrackRequest = gql`
  mutation createTrack($trackID: String!, $sessionGID: ID!) {
    createTracks(trackID: $trackID, sessionId: $sessionGID) {
      id
      trackID
    }
  }
`;
