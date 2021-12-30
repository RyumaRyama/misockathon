/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMusic = /* GraphQL */ `
  query GetMusic($artist: String!, $title: String!) {
    getMusic(artist: $artist, title: $title) {
      artist
      song_ms
      spotify_url
      title
    }
  }
`;
export const listMusic = /* GraphQL */ `
  query ListMusic(
    $filter: TableMusicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMusic(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        artist
        song_ms
        spotify_url
        title
      }
      nextToken
    }
  }
`;
