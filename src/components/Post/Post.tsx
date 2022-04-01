import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import {LinkPreview} from '../../api/getSubredditLinksListing';
import {PostFooter} from './PostFooter';
import {PostHeader, PostHeaderProps} from './PostHeader';

export type PostProps = PostHeaderProps & {
  preview?: LinkPreview;
};

export const Post: React.FC<PostProps> = ({
  title,
  author,
  created_utc,
  style,
  preview,
}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={'#DDDDDD'}
      onPress={() => {}}>
      <View style={[{backgroundColor: '#ffffff'}, style]}>
        <PostHeader
          title={title}
          author={author}
          created_utc={created_utc}
          style={{paddingBottom: 10}}
        />
        {preview?.enabled && (
          <Image
            source={{
              uri: preview?.images?.[0]?.resolutions?.[2]?.url,
              height: preview?.images?.[0]?.resolutions?.[2]?.height,
            }}
          />
        )}
        <PostFooter />
      </View>
    </TouchableHighlight>
  );
};
