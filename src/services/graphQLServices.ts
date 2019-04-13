import { request } from 'https';

const GRAPHQL_API =
  'https://api.graph.cool/simple/v1/cjgww71fd4nfp018700vpvkmi';

// fetch a query of the current session from the database
//  - return a JSON of all the content of the session
//  - get the tracks that are to be added from the database
async function fetchGraph(graphID) {
  const query = `query getSession($graphID: ID!) {
  Session(id: $graphID) {
      id 
      trackses {
          trackID
          id
      }
  }
}`;
  const data = await request(GRAPHQL_API, query, { graphID });
}

/**
 * set a badge value of the number of tracks in the database to be added to the session
 * @param {string} graphID
 */
async function badgeRequestsGraph(graphID) {
  const query = `query getSession($graphID: ID!) {
            Session(id: $graphID) {
                id 
                trackses {
                    trackID
                    id
                }
            }
        }`;
  const data = await request(GRAPHQL_API, query, { graphID });
  // this.setState({ s: data });
  var tracksToAdd = data.Session.trackses;
  // this.removeTrackGraph("cjgwwohnd0wm301049e8f5yso");
}

/**
 * Remove a track from the database using the track id
 * @param {string} trackGID
 */
async function removeTrackGraph(trackGID) {
  const mutation = `mutation delSession($trackGID: ID!) {
            deleteTracks(id: $trackGID) {
                id
                trackID
            }
        }`;

  const data = await request(GRAPHQL_API, mutation, { trackGID });
}

/**
 * Create an instance of a session in the database
 *  - a JSON is returned with the information created
 *      - keel the database session id for mutations
 * @param {*} sessionID
 */
async function createSessionGraph(sessionID) {
  const mutation = `mutation($sessionID: String!){
            createSession(
                sessionID: $sessionID
            ){
                id
            }
        }`;

  const data = await request(GRAPHQL_API, mutation, { sessionID });
}

/**
 * Add the track uri to the Graph database
 *
 * @param {string} trackID
 * @param {string} sessionGID
 */
async function addTrackGraph(trackID, sessionGID) {
  const mutation = `mutation createTrack($trackID: String!, $sessionGID: ID!) { 
                createTracks (
                    trackID: $trackID, 
                    sessionId: $sessionGID){
                        id
                        trackID
                    }
                }`;

  const data = await request(GRAPHQL_API, mutation, { trackID, sessionGID });
}
