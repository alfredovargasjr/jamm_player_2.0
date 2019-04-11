const SPOTIFY_API: string = 'https://api.spotify.com';
// async function test() {
//   const user = await getPlaylistTracks('a', 'b', '2', '2');
//   if (user) {
//     user.items[0].track.album
//   }

// }
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
  if (response.status === 200) {
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
  sessionId: string
): Promise<SpotifyGetPlaylistTracksResponse.RootObject | undefined> {
  const response = await fetch(
    `${SPOTIFY_API}/v1/users/${userId}/playlists/${sessionId}/tracks`,
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
  trackUri: string,
  playlistId: string,
  userId: string
) {
  const uriEncoded = encodeURI(trackUri);
  const response = await fetch(
    `${SPOTIFY_API}/v1/users/${userId}/playlists/${playlistId}/tracks?uris=${uriEncoded}`,
    {
      // const response = await fetch(`https://api.spotify.com/v1/users/${this.state.userData.id}/playlists/0LXTq08rGJWw6x2dURPs5a/tracks?uris=${uri}`, {
      headers: {
        Authorization: `${tokenType} ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
  const json = await response.json();
  console.log(json);
}