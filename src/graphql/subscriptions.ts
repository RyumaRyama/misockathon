/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMusic = /* GraphQL */ `
  subscription OnCreateMusic(
    $artist: String
    $song_ms: String
    $spotify_url: String
    $title: String
  ) {
    onCreateMusic(
      artist: $artist
      song_ms: $song_ms
      spotify_url: $spotify_url
      title: $title
    ) {
      artist
      song_ms
      spotify_url
      title
    }
  }
`;
export const onDeleteMusic = /* GraphQL */ `
  subscription OnDeleteMusic(
    $artist: String
    $song_ms: String
    $spotify_url: String
    $title: String
  ) {
    onDeleteMusic(
      artist: $artist
      song_ms: $song_ms
      spotify_url: $spotify_url
      title: $title
    ) {
      artist
      song_ms
      spotify_url
      title
    }
  }
`;
export const onUpdateMusic = /* GraphQL */ `
  subscription OnUpdateMusic(
    $artist: String
    $song_ms: String
    $spotify_url: String
    $title: String
  ) {
    onUpdateMusic(
      artist: $artist
      song_ms: $song_ms
      spotify_url: $spotify_url
      title: $title
    ) {
      artist
      song_ms
      spotify_url
      title
    }
  }
`;
