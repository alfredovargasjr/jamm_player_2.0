import * as React from 'react';

interface SpotifyPlaylistProps {
  ownerId: string;
  playlistId: string;
}

const SpotifyPlaylist: React.FunctionComponent<SpotifyPlaylistProps> = ({
  ownerId,
  playlistId,
}) => {
  return (
    <iframe
      id="player"
      src={`https://open.spotify.com/embed?uri=spotify:user:${ownerId}:playlist:${playlistId}&amp;view=coverart`}
      width="100%"
      height="380"
      allow="encrypted-media"
      style={{ marginTop: '30px' }}
    />
  );
};

export default SpotifyPlaylist;
