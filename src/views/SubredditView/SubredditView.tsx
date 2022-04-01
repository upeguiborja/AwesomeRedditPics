import React from 'react';
import {ListRenderItemInfo, View, VirtualizedList} from 'react-native';
import {useQuery} from 'react-query';
import {
  getSubredditLinksListing,
  Listings,
  Link,
} from '../../api/getSubredditLinksListing';
import {Post} from '../../components';

const renderPost = (info: ListRenderItemInfo<Link>) => (
  <Post
    style={{marginTop: 10}}
    title={info.item.title}
    author={info.item.author}
    created={info.item.created}
    preview={info.item.preview}
  />
);

export const SubredditView: React.FC = () => {
  const {data} = useQuery(
    ['listing', {subreddit: 'pics', listing: Listings.Hot}],
    getSubredditLinksListing,
  );

  return (
    <View>
      {data && (
        <VirtualizedList
          data={data.map((item, index) => ({...item, key: index}))}
          initialNumToRender={5}
          renderItem={renderPost}
          getItemCount={() => 25}
          getItem={(_, index) => data[index]}
        />
      )}
    </View>
  );
};
