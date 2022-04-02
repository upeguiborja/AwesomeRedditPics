import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import {LinkPreview} from '../../api/getSubredditLinksListing';
import {StackNavigatorParamsList} from '../../App';
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
  score,
}) => {
  const navigation = useNavigation();

  function onPress() {
    const uri = permalink && `https://reddit.com${permalink}`;
    navigation.navigate('Browser', {uri: uri});
  }
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={'#DDDDDD'}
      onPress={onPress}>
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
        <PostFooter num_comments={num_comments} score={score} />
      </View>
    </TouchableHighlight>
  );
};
