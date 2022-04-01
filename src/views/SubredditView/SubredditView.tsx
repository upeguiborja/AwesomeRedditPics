import React from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {
  getSubredditLinksListing,
  Listings,
} from '../../api/getSubredditLinksListing';
import {Post} from '../../components';

export const SubredditView: React.FC = () => {
  const {data} = useQuery(
    ['listing', {subreddit: 'pics', listing: Listings.Hot}],
    getSubredditLinksListing,
  );

  return (
    <View>
      <Post />
    </View>
  );
};
