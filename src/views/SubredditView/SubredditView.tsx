import React, {useState} from 'react';
import {
  ActivityIndicator,
  ListRenderItemInfo,
  RefreshControl,
  View,
  VirtualizedList,
} from 'react-native';
import {useQuery, useQueryClient} from 'react-query';
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
    created_utc={info.item.created_utc}
    preview={info.item.preview}
    permalink={info.item.permalink}
  />
);

export type SubredditViewProps = {
  listing: Listings;
};

export const SubredditView: React.FC<SubredditViewProps> = ({listing}) => {
  const [refreshing, setRefreshing] = useState(false);
  const {data, isLoading} = useQuery(
    ['listing', {subreddit: 'pics', listing: listing}],
    getSubredditLinksListing,
    {onSuccess: () => setRefreshing(false)},
  );
  const queryClient = useQueryClient();

  function onRefresh() {
    setRefreshing(true);
    queryClient.invalidateQueries([
      'listing',
      {subreddit: 'pics', listing: listing},
    ]);
  }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        data && (
          <VirtualizedList
            data={data}
            initialNumToRender={5}
            renderItem={renderPost}
            getItemCount={() => 25}
            getItem={(_, index) => data[index]}
            keyExtractor={(_, index) => `${index}`}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )
      )}
    </View>
  );
};
