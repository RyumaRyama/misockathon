/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMusicInput = {
  artist: string,
  song_ms?: string | null,
  spotify_url?: string | null,
  title: string,
};

export type Music = {
  __typename: "Music",
  artist: string,
  song_ms?: string | null,
  spotify_url?: string | null,
  title: string,
};

export type DeleteMusicInput = {
  artist: string,
  title: string,
};

export type UpdateMusicInput = {
  artist: string,
  song_ms?: string | null,
  spotify_url?: string | null,
  title: string,
};

export type TableMusicFilterInput = {
  artist?: TableStringFilterInput | null,
  song_ms?: TableStringFilterInput | null,
  spotify_url?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type MusicConnection = {
  __typename: "MusicConnection",
  items?:  Array<Music | null > | null,
  nextToken?: string | null,
};

export type CreateMusicMutationVariables = {
  input: CreateMusicInput,
};

export type CreateMusicMutation = {
  createMusic?:  {
    __typename: "Music",
    artist: string,
    song_ms?: string | null,
    spotify_url?: string | null,
    title: string,
  } | null,
};

export type DeleteMusicMutationVariables = {
  input: DeleteMusicInput,
};

export type DeleteMusicMutation = {
  deleteMusic?:  {
    __typename: "Music",
    artist: string,
    song_ms?: string | null,
    spotify_url?: string | null,
    title: string,
  } | null,
};

export type UpdateMusicMutationVariables = {
  input: UpdateMusicInput,
};

export type UpdateMusicMutation = {
  updateMusic?:  {
    __typename: "Music",
    artist: string,
    song_ms?: string | null,
    spotify_url?: string | null,
    title: string,
  } | null,
};

export type GetMusicQueryVariables = {
  artist: string,
  title: string,
};

export type GetMusicQuery = {
  getMusic?:  {
    __typename: "Music",
    artist: string,
    song_ms?: string | null,
    spotify_url?: string | null,
    title: string,
  } | null,
};

export type ListMusicQueryVariables = {
  filter?: TableMusicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMusicQuery = {
  listMusic?:  {
    __typename: "MusicConnection",
    items?:  Array< {
      __typename: "Music",
      artist: string,
      song_ms?: string | null,
      spotify_url?: string | null,
      title: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMusicSubscriptionVariables = {
  artist?: string | null,
  song_ms?: string | null,
  spotify_url?: string | null,
  title?: string | null,
};

export type OnCreateMusicSubscription = {
  onCreateMusic?:  {
    __typename: "Music",
    artist: string,
    song_ms?: string | null,
    spotify_url?: string | null,
    title: string,
  } | null,
};

export type OnDeleteMusicSubscriptionVariables = {
  artist?: string | null,
  song_ms?: string | null,
  spotify_url?: string | null,
  title?: string | null,
};

export type OnDeleteMusicSubscription = {
  onDeleteMusic?:  {
    __typename: "Music",
    artist: string,
    song_ms?: string | null,
    spotify_url?: string | null,
    title: string,
  } | null,
};

export type OnUpdateMusicSubscriptionVariables = {
  artist?: string | null,
  song_ms?: string | null,
  spotify_url?: string | null,
  title?: string | null,
};

export type OnUpdateMusicSubscription = {
  onUpdateMusic?:  {
    __typename: "Music",
    artist: string,
    song_ms?: string | null,
    spotify_url?: string | null,
    title: string,
  } | null,
};
