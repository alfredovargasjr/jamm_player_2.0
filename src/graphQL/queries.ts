import gql from 'graphql-tag';

const getSession = gql`
  query getSession($graphID: ID!) {
    Session(id: $graphID) {
      id
      trackses {
        trackID
        id
      }
    }
  }
`;
