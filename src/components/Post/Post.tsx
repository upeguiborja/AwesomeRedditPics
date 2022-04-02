import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {LinkPreview} from '../../api/getSubredditLinksListing';
import {PostFooter, PostFooterProps} from './PostFooter';
import {PostHeader, PostHeaderProps} from './PostHeader';

export type PostProps = PostHeaderProps &
  PostFooterProps & {
    preview?: LinkPreview;
    permalink?: string;
  };

export const Post: React.FC<PostProps> = ({
  title,
  author,
  created_utc,
  style,
  preview,
  permalink,
  num_comments,
  ups,
  downs,
}) => {
  const navigation = useNavigation();

  function onPress() {
    const uri = permalink && `https://reddit.com${permalink}`;
    navigation.navigate('Browser' as never, {uri: uri} as never); // TODO: Find the correct way to type this
  }
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
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
        <PostFooter num_comments={num_comments} ups={ups} downs={downs} />
      </View>
    </TouchableOpacity>
  );
};
