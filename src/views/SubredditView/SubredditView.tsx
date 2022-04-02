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
  <Post style={{marginTop: 10}} {...info.item} />
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
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
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
