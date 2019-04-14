import gql from 'graphql-tag';

const getSession = gql`
  query getSession($shortCode: String!) {
    Session(shortCode: $shortCode) {
      id
      trackses {
        trackID
        id
      }
    }
  }
`;
