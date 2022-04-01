import React from 'react';
import {View, Image} from 'react-native';
import {AwesomeText} from '../AwesomeText';
import {ImagePostActions} from './ImagePostActions';
import {ImagePostHeader} from './ImagePostHeader';

export const ImagePost: React.FC<{}> = () => {
  return (
    <View>
      <ImagePostHeader />
      <Image
        source={{
          height: 100,
          uri: 'https://preview.redd.it/3g1zut8i9pq81.jpg?width=640&crop=smart&auto=webp&s=ec568831ed13b9c3dbcf42f6ae810417d8633e82',
        }}
      />
      <ImagePostActions />
    </View>
  );
};
