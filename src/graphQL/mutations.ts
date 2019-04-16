import gql from 'graphql-tag';

export const deleteTrackRequest = gql`
  mutation deleteTrackFromSession($trackId: ID!, $sessionId: ID!) {
    removeFromSessionOnTracks(
      tracksesTracksId: $trackId
      sessionSessionId: $sessionId
    ) {
      tracksesTracks {
        trackID
      }
      sessionSession {
        id
      }
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
