declare namespace SpotifyMeResponse {
  export interface ExternalUrls {
    spotify: string;
  }

  export interface Followers {
    href?: any;
    total: number;
  }

  export interface Image {
    height?: any;
    url: string;
    width?: any;
  }

  export interface RootObject {
    country: string;
    display_name: string;
    email: string;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
  }
}

declare namespace SpotifyCreatedPlaylistResponse {
  export interface ExternalUrls {
    spotify: string;
  }

  export interface Followers {
    href?: any;
    total: number;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Owner {
    display_name: string;
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    type: string;
    uri: string;
  }

  export interface Tracks {
    href: string;
    items: any[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
  }

  export interface RootObject {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: any[];
    name: string;
    owner: Owner;
    primary_color?: any;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
  }
}

declare namespace SpotifyGetPlaylistTracksResponse {
  export interface ExternalUrls {
    spotify: string;
  }

  export interface AddedBy {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Artist {
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }

  export interface Artist2 {
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalIds {
    isrc: string;
  }

  export interface ExternalUrls5 {
    spotify: string;
  }

  export interface Track {
    album: Album;
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls5;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
  }

  export interface VideoThumbnail {
    url?: any;
  }

  export interface Item {
    added_at: Date;
    added_by: AddedBy;
    is_local: boolean;
    primary_color?: any;
    track: Track;
    video_thumbnail: VideoThumbnail;
  }

  export interface RootObject {
    href: string;
    items: Item[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
  }
}

declare namespace SpotifySearchTrackResponse {
  export interface ExternalUrls {
    spotify: string;
  }

  export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalIds {
    isrc: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }

  export interface Item {
    album: Album;
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  }

  export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
  }

  export interface RootObject {
    tracks: Tracks;
  }
}

declare namespace SpotifyAddTrackToPlaylistResponse {
  export interface ExternalUrls {
    spotify: string;
  }

  export interface AddedBy {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Artist {
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }

  export interface Artist2 {
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalIds {
    isrc: string;
  }

  export interface ExternalUrls5 {
    spotify: string;
  }

  export interface Track {
    album: Album;
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls5;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
  }

  export interface VideoThumbnail {
    url?: any;
  }

  export interface Item {
    added_at: Date;
    added_by: AddedBy;
    is_local: boolean;
    primary_color?: any;
    track: Track;
    video_thumbnail: VideoThumbnail;
  }

  export interface RootObject {
    href: string;
    items: Item[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
  }
}
