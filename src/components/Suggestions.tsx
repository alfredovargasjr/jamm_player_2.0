import * as React from 'react';
import ListGroup from 'reactstrap/lib/ListGroup';
import Track from '../components/Track';
import { Tracks as ITrack } from '../generated/graphql';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface SuggestionsProps {
  tracks: ITrack[];
  isJoiner: boolean;
}

interface SuggestionsState {
  suggestedTracks: TrackWithGID[];
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
    tracks: ITrack[]
  ): Promise<SpotifySearchTrackResponse.Item[]> {
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    if (tracks && tokenType && accessToken) {
      const getTracks = await spotifyAPIServices.getTracks(
        tokenType,
        accessToken,
        tracks
      );
      if (getTracks && getTracks.tracks) {
        this.setState({
          suggestedTracks: getTracks.tracks.map(track => {
            const foundTrack = tracks.find(
              element => element.trackID === track.id
            );
            return {
              ...track,
              gId: foundTrack ? foundTrack.id : '',
            };
          }),
        });
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
          {this.state.suggestedTracks.map((track, i) => (
            // <Track
            //   isJoiner={this.props.isJoiner}
            //   key={`${track.id + i}`}
            //   track={track}
            //   disabled={false}
            // />
            <div />
          ))}
        </ListGroup>
      </div>
    );
  }
}
