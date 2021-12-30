/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMusic = /* GraphQL */ `
  mutation CreateMusic($input: CreateMusicInput!) {
    createMusic(input: $input) {
      artist
      song_ms
      spotify_url
      title
    }
  }
`;
export const deleteMusic = /* GraphQL */ `
  mutation DeleteMusic($input: DeleteMusicInput!) {
    deleteMusic(input: $input) {
      artist
      song_ms
      spotify_url
      title
    }
  }
`;
export const updateMusic = /* GraphQL */ `
  mutation UpdateMusic($input: UpdateMusicInput!) {
    updateMusic(input: $input) {
      artist
      song_ms
      spotify_url
      title
    }
  }
`;
