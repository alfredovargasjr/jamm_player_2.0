import gql from 'graphql-tag';

export const deleteTrackRequest = gql`
  mutation deleteTrackRequest($graphID: ID!) {
    deleteTracks(id: $graphID) {
      id
      trackID
    }
  }
`;

export const createSession = gql`
  mutation createSession(
    $sessionID: String!
    $shortCode: String!
    $hostID: String!
  ) {
    createSession(
      sessionID: $sessionID
      shortCode: $shortCode
      hostID: $hostID
    ) {
      id
      shortCode
      sessionID
      hostID
    }
  }
`;

export const addTrackRequest = gql`
  mutation createTrack($trackID: String!, $sessionGID: ID!) {
    createTracks(trackID: $trackID, sessionId: $sessionGID) {
      id
      trackID
    }
  }
`;
