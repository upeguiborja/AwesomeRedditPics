import axios from 'axios';
import {QueryFunction} from 'react-query';

export enum Listings {
  Hot = 'hot',
}

export const getRedditListing: QueryFunction = async ({queryKey}) => {
  const [_, {subreddit, listing}] = queryKey as [
    any,
    {subreddit: string; listing: Listings},
  ];
  return axios.get(`https://api.reddit.com/r/${subreddit}/${listing}.json`);
};
