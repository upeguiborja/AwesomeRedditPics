import React from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {getRedditListing, Listings} from '../../api/getRedditListing';
import {Post} from '../../components';

export const SubredditView: React.FC = () => {
  const {data} = useQuery(
    ['listing', {subreddit: 'pics', listing: 'hot'}],
    getRedditListing,
  );

  return (
    <View>
      <Post />
    </View>
  );
};
