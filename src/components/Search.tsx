import * as React from 'react';
import { Form, FormGroup, Input, ListGroup } from 'reactstrap';
import spotifyAPIServices from '../services/spotifyAPIServices';
import Track from './Track';

interface SearchState {
  searchResults: SpotifySearchTrackResponse.Item[];
  showDropdown: boolean;
  typing: boolean;
  timeoutId: number;
  searchQuery: string;
  mouseOnComponent: boolean;
}

export default class Search extends React.Component<{}, SearchState> {
  public state: SearchState = {
    mouseOnComponent: false,
    searchQuery: '',
    searchResults: [],
    showDropdown: false,
    timeoutId: 0,
    typing: false,
  };
  public node!: HTMLDivElement | null;

  public handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }

    this.setState({
      searchQuery: e.currentTarget.value,
      timeoutId: (setTimeout(async () => {
        const tokenType = localStorage.getItem('tokenType');
        const accessToken = localStorage.getItem('accessToken');
        if (tokenType && accessToken) {
          const resultData = await spotifyAPIServices.searchTrack(
            tokenType,
            accessToken,
            this.state.searchQuery
          );
          if (resultData) {
            this.setState({ searchResults: resultData.tracks.items });
          }
        }
        this.setState({
          showDropdown: true,
        });
      }, 700) as unknown) as number,
      typing: false,
    });
  }

  public displaySearch() {
    if (this.state.showDropdown) {
      return (
        <ListGroup>
          {this.state.searchResults.map(track => (
            <Track key={track.id} track={track} />
          ))}
        </ListGroup>
      );
    }
    return null;
  }

  public componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }
  public componentWillUnMount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  public handleClick = (e: MouseEvent) => {
    if (this.node && !this.node.contains(e.target as Node)) {
      // click is outside this component
      this.setState({ showDropdown: false });
    }
  };

  public render() {
    return (
      <div ref={node => (this.node = node)}>
        <Form>
          <FormGroup
            style={{
              margin: 'auto',
              padding: '30px 0 0 0',
              width: '90%',
            }}
          >
            <Input
              name="song"
              id="songSearch"
              placeholder="Search"
              value={this.state.searchQuery}
              onChange={e => this.handleInputChange(e)}
              onClick={() => {
                if (this.state.searchQuery !== '') {
                  this.setState({ showDropdown: true });
                }
              }}
            />
          </FormGroup>
        </Form>
        <div
          style={{
            height: '380px',
            marginLeft: '24px',
            overflow: 'auto',
            position: 'absolute',
            width: '81%',
          }}
        >
          {this.displaySearch()}
        </div>
      </div>
    );
  }
}
