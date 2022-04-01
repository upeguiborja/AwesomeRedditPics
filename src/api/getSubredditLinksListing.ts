import axios from 'axios';
import {QueryFunction} from 'react-query';

export enum Listings {
  Hot = 'hot',
}

type Thing<T = Object> = {
  id?: string;
  name?: string;
  kind: string;
  data: T;
};

type Link = {
  preview?: Object;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  created: number;
  created_utc: number;
};

type LinkThing = Thing<Link> & {
  kind: 't3';
};

type ListingResponse<T extends Thing> = {
  kind: 'Listing';
  data: {
    after: string | null;
    before: string | null;
    children: T[];
    dist: number;
    modhash: string;
  };
};

const parseListingResponseChild = () => {};

export const getSubredditLinksListing: QueryFunction = async ({queryKey}) => {
  const [_, {subreddit, listing}] = queryKey as [
    any,
    {subreddit: string; listing: Listings},
  ];
  return axios
    .get<ListingResponse<LinkThing>>(
      `https://api.reddit.com/r/${subreddit}/${listing}.json?raw_json=1`,
    )
    .then(response => {
      return response.data.data?.children?.map(link => ({
        preview: link.data.preview,
        title: link.data.title,
        author: link.data.author,
        score: link.data.score,
        num_comments: link.data.num_comments,
        created: link.data.created,
        created_utc: link.data.created_utc,
      }));
    });
};
