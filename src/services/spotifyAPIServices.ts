import { func } from 'prop-types';

const SPOTIFY_API: string = 'https://api.spotify.com';

/**
 *  Spotify API Services
 *  - user needs to login to spotify on the client side to receive
 *    a token type along with an access token provided by Spotify's
 *    oAuth services.
 */

// Spotify API: call api to get a snapshot of the users profile
async function getUser(
  tokenType: string,
  token: string
): Promise<SpotifyMeResponse.RootObject | undefined> {
  const response = await fetch(`${SPOTIFY_API}/v1/me`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });
  if (response.status === 200) {
    const json = await response.json();
    return json;
  }
  return undefined;
}

// Spotify API: use the API to create a collaborative playlist
async function createPlaylist(
  tokenType: string,
  token: string,
  name: string,
  desc: string,
  userId: string
): Promise<SpotifyCreatedPlaylistResponse.RootObject | undefined> {
  const response = await fetch(`${SPOTIFY_API}/v1/users/${userId}/playlists`, {
    body: JSON.stringify({
      collaborative: true,
      description: desc,
      name,
      public: false,
    }),
    headers: {
      Authorization: `${tokenType} ${token}`,
      'Content-type': 'application/json',
    },
    method: 'POST',
  });
  if (response.status === 201) {
    const json = await response.json();
    return json;
  }
  return undefined;
}

// - Spotify API: return the tracks of a playlist
async function getPlaylistTracks(
  tokenType: string,
  token: string,
  userId: string,
  playlistId: string
): Promise<SpotifyGetPlaylistTracksResponse.RootObject | undefined> {
  const response = await fetch(
    `${SPOTIFY_API}/v1/users/${userId}/playlists/${playlistId}/tracks`,
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
      method: 'GET',
    }
  );
  if (response.status === 200) {
    const json = await response.json();
    return json;
  }
  return undefined;
}

// - Spotify API: search for a track
async function searchTrack(
  tokenType: string,
  token: string,
  trackName: string
): Promise<SpotifySearchTrackResponse.RootObject | undefined> {
  const trackNameEncoded = encodeURI(trackName);
  const response = await fetch(
    `${SPOTIFY_API}/v1/search?q=${trackNameEncoded}&type=track`,
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
        accept: 'application/json',
      },
      method: 'GET',
    }
  );
  if (response.status === 200) {
    const json = await response.json();
    return json;
  }
  return undefined;
}

// - Spotify API: add a track (uris) to a playlist id
async function addTrackToPlaylist(
  tokenType: string,
  token: string,
  playlistId: string,
  trackUri: string
) {
  const uriEncoded = encodeURI(trackUri);
  const response = await fetch(
    `${SPOTIFY_API}/v1/playlists/${playlistId}/tracks?uris=${uriEncoded}`,
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
  if (response.status === 201) {
    const json = await response.json();
    return json;
  }
  return undefined;
}

// - API: follow a playlist, need to follow a collaboraive playlist to add a song
async function followPlaylist(
  tokenType: string,
  token: string,
  hostId: string,
  playlistId: string
): Promise<boolean> {
  const response = await fetch(
    `${SPOTIFY_API}/v1/users/${hostId}/playlists/${playlistId}/followers`,
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    }
  );
  if (response.status === 200) {
    return true;
  }
  return false;
}

// - API: follow a playlist, need to follow a collaboraive playlist to add a song
async function getPlaylist(
  tokenType: string,
  token: string,
  hostId: string,
  playlistId: string
): Promise<SpotifyGetPlaylistResponse.RootObject | undefined> {
  const response = await fetch(
    `${SPOTIFY_API}/v1/users/${hostId}/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
      method: 'GET',
    }
  );
  if (response.status === 200) {
    const json = await response.json();
    return json;
  }
  return undefined;
}

async function getTracks(
  tokenType: string,
  token: string,
  tracks: any[]
): Promise<SpotifyGetTracksResponse.RootObject | undefined> {
  const tracksToQuery = tracks.map(e => e.trackID).join(',');
  const response = await fetch(
    `${SPOTIFY_API}/v1/tracks/?ids=${tracksToQuery}`,
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
      method: 'Get',
    }
  );
  if (response.status === 200) {
    const json = await response.json();
    return json;
  }
  return undefined;
}

export default {
  addTrackToPlaylist,
  createPlaylist,
  followPlaylist,
  getPlaylist,
  getPlaylistTracks,
  getTracks,
  getUser,
  searchTrack,
};
