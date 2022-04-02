import axios from 'axios';
import {QueryFunction} from 'react-query';

export enum Listings {
  Hot = 'hot',
  New = 'new',
  Top = 'top',
}

export type Thing<T = Object> = {
  id?: string;
  name?: string;
  kind: string;
  data: T;
};

export type Link = {
  preview?: LinkPreview;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  created: number;
  created_utc: number;
  permalink?: string;
  ups: number;
  downs: number;
};

export type LinkPreview = {
  enabled: boolean;
  images: Array<{
    id: string;
    resolutions: Image[];
    source: Image;
    variants: Object;
  }>;
};

export type Image = {
  height: number;
  width: number;
  url: string;
};

export type LinkThing = Thing<Link> & {
  kind: 't3';
};

export type ListingResponse<T extends Thing> = {
  kind: 'Listing';
  data: {
    after: string | null;
    before: string | null;
    children: T[];
    dist: number;
    modhash: string;
  };
};

const parseLinkThing = (linkThing: LinkThing) => ({
  preview: linkThing.data.preview,
  title: linkThing.data.title,
  author: linkThing.data.author,
  score: linkThing.data.score,
  num_comments: linkThing.data.num_comments,
  created: linkThing.data.created,
  created_utc: linkThing.data.created_utc,
  permalink: linkThing.data.permalink,
  ups: linkThing.data.ups,
  downs: linkThing.data.downs,
});

export const getSubredditLinksListing: QueryFunction<
  Link[],
  [any, {subreddit: string; listing: Listings}]
> = async ({queryKey}) => {
  const [_, {subreddit, listing}] = queryKey;
  return axios
    .get<ListingResponse<LinkThing>>(
      `https://api.reddit.com/r/${subreddit}/${listing}.json?raw_json=1`,
    )
    .then(response => {
      return response.data.data?.children?.map(parseLinkThing);
    });
};
