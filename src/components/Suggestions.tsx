import * as React from 'react';
import ListGroup from 'reactstrap/lib/ListGroup';
import Track from '../components/Track';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface SuggestionsProps {
  tracks: any[];
  isJoiner: boolean;
}

interface SuggestionsState {
  suggestedTracks: SpotifySearchTrackResponse.Item[];
}

export default class Suggestions extends React.Component<
  SuggestionsProps,
  SuggestionsState
> {
  public state: SuggestionsState = {
    suggestedTracks: [],
  };

  public componentDidMount() {
    const { tracks } = this.props;
    this.getSuggestions(tracks);
  }

  public async getSuggestions(
    tracks: any[]
  ): Promise<SpotifySearchTrackResponse.Item[]> {
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    if (tracks && tokenType && accessToken) {
      const getTracks = await spotifyAPIServices.getTracks(
        tokenType,
        accessToken,
        tracks
      );
      if (getTracks) {
        if (getTracks.tracks) {
          this.setState({ suggestedTracks: getTracks.tracks });
        }
      }
    }
    return [];
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
          {this.state.suggestedTracks.map(track => (
            <Track
              isJoiner={this.props.isJoiner}
              key={track.id}
              track={track}
              disabled={false}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}
