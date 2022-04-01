import React from 'react';
import {View, Image} from 'react-native';
import {PostActions} from './PostActions';
import {PostHeader} from './PostHeader';

export const Post: React.FC<{}> = () => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <PostHeader style={{paddingBottom: 10}} />
      <Image
        source={{
          height: 500,
          uri: 'https://preview.redd.it/3g1zut8i9pq81.jpg?width=640&crop=smart&auto=webp&s=ec568831ed13b9c3dbcf42f6ae810417d8633e82',
        }}
        resizeMode="contain"
      />
      <PostActions />
    </View>
  );
};
