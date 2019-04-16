import * as React from 'react';
import { MutationFn } from 'react-apollo';
import { NotificationManager } from 'react-notifications';
import ListGroup from 'reactstrap/lib/ListGroup';
import Track from '../components/Track';
import {
  DeleteTrackFromSessionComponent,
  DeleteTrackFromSessionMutation,
  Tracks as ITrack,
} from '../generated/graphql';
import spotifyAPIServices from '../services/spotifyAPIServices';

interface SuggestionsProps {
  tracks: ITrack[];
  isJoiner: boolean;
  reloadComponent: () => void;
}

interface SuggestionsState {
  suggestedTracks: TrackWithGID[];
  animated: string;
}

export default class Suggestions extends React.Component<
  SuggestionsProps,
  SuggestionsState
> {
  public state: SuggestionsState = {
    animated: '',
    suggestedTracks: [],
  };

  public componentDidMount() {
    const { tracks } = this.props;
    this.getSuggestions(tracks);
  }

  public handleOnClick = async (
    track: TrackWithGID,
    deleteTrackRequest?: MutationFn<any, any>
  ) => {
    // get the suggested playlist, add it to the playlist, remove from graph session
    // spotify api, add track to playlist
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    const playlistId = localStorage.getItem('createdPlaylistId');
    const graphId = localStorage.getItem('graphSessionId');
    if (tokenType && accessToken && playlistId) {
      try {
        const resultData = await spotifyAPIServices.addTrackToPlaylist(
          tokenType,
          accessToken,
          playlistId,
          track.uri
        );
        if (resultData) {
          // remove suggestion from graph session
          if (graphId && track.gId && deleteTrackRequest) {
            try {
              const data: WrappedDataMutation<
                DeleteTrackFromSessionMutation
              > = (await deleteTrackRequest({
                variables: { trackId: track.gId, sessionId: graphId },
              })) as WrappedDataMutation<DeleteTrackFromSessionMutation>;
              if (data.data.removeFromSessionOnTracks) {
                NotificationManager.success(
                  `"${track.name} by ${track.artists[0].name}"`,
                  'Suggested Song was added to the playlist'
                );
                const optimistic = this.state.suggestedTracks.filter(
                  item => item.gId !== track.gId
                );
                this.setState({ suggestedTracks: optimistic });
                this.props.reloadComponent();
                return;
              }
            } catch (ex) {
              NotificationManager.error(
                `"${track.name} by ${track.artists[0].name}"`,
                'Suggested Song was can not be added to the playlist'
              );
              this.props.reloadComponent();
              return;
            }
          }
        }
      } catch (ex) {
        NotificationManager.error(
          `"${track.name} by ${track.artists[0].name}"`,
          'Song could not be added'
        );
      }
    }
    return;
  };

  public async getSuggestions(
    tracks: ITrack[]
  ): Promise<SpotifySearchTrackResponse.Item[]> {
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    if (tracks && tokenType && accessToken && (tracks.length > 0)) {
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
          overflow: 'auto',
        }}
      >
        <ListGroup>
          {this.state.suggestedTracks.length < 1 ? (
            <h3 style={{ textAlign: 'center' }}>No Suggestions</h3>
          ) : null}
          {this.state.suggestedTracks.map((track, i) => (
            <DeleteTrackFromSessionComponent
            // // @ts-ignore
            // update={(cache, { data: { deleteTrackRequest } }) => {
            //   // @ts-ignore
            //   const { Session } = cache.readQuery({
            //     query: GetSessionDocument,
            //   });
            //   cache.writeQuery({
            //     query: GetSessionDocument,
            //     // tslint:disable-next-line:object-literal-sort-keys
            //     data: { trackses: Session.trackses.filter([deleteTrackRequest]) },
            //   });
            // }}
            >
              {deleteTrackRequest => (
                <Track
                  key={`${track.id + i}`}
                  track={track}
                  disabled={false}
                  mutationFn={deleteTrackRequest}
                  handleOnClick={this.handleOnClick}
                />
              )}
            </DeleteTrackFromSessionComponent>
          ))}
        </ListGroup>
      </div>
    );
  }
}
