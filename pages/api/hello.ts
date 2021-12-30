// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Amplify
import {API, GraphQLResult} from '@aws-amplify/api';
import { Music, ListMusicQuery, GetMusicQuery, TableMusicFilterInput } from '../../src/API';
import { listMusic } from '../../src/graphql/queries';

import { Amplify } from "aws-amplify";
Amplify.configure({
  aws_appsync_region: "ap-northeast-1",
  aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.AWS_APPSYNC_API_KEY,
  Analytics: {
    disabled: true,
  },
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GraphQLResult<ListMusicQuery>>
) {
  getMusicList().then((result) => {
    const music_list = result;
    res.status(200).json(music_list);
  });
}

const getMusicList = async () => {
  const result = API.graphql({
    query: listMusic,
  }) as GraphQLResult<ListMusicQuery>;
  return result;
}
