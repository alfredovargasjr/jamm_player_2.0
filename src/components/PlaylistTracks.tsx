import * as React from 'react';
import ListGroup from 'reactstrap/lib/ListGroup';
import Track from '../components/Track';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface PlaylistTracksProps {
  playlistId: string;
  hostId: string;
  isJoiner: boolean;
}

interface PlaylistState {
  playlistTracks: any[];
}

export default class PlaylistTracks extends React.Component<
  PlaylistTracksProps
> {
  public state: PlaylistState = {
    playlistTracks: [],
  };

  public componentDidMount() {
    const { playlistId, hostId } = this.props;
    this.getPlaylistTracks(playlistId, hostId);
  }

  public async getPlaylistTracks(playlistId: string, hostId: string) {
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    if (playlistId && tokenType && accessToken && hostId) {
      const getTracks = await spotifyAPIServices.getPlaylistTracks(
        tokenType,
        accessToken,
        hostId,
        playlistId
      );
      if (getTracks) {
        if (getTracks.items) {
          const tracks: SpotifyGetPlaylistTracksResponse.Track[] = [];
          getTracks.items.map((item, i) => {
            tracks.push(item.track);
          });
          this.setState({ playlistTracks: tracks });
        }
      }
    }
  }

  public render() {
    return (
      <div
        style={{
          height: '380px',
          marginLeft: '43px',
          overflow: 'auto',
          position: 'absolute',
          width: '81%',
        }}
      >
        <ListGroup>
          {this.state.playlistTracks.map((track, i) => (
            <Track
              isJoiner={this.props.isJoiner}
              key={`${track.id + i}`}
              track={track}
              disabled={true}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}
