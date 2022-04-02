import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import {friendlyNumber} from '../../utils/friendlyNumber';
import {AwesomeText} from '../AwesomeText';

const Icon: React.FC<FontAwesomeIconProps> = ({style, ...props}) => {
  return (
    <FontAwesomeIcon
      {...props}
      color="#ccccca"
      size={20}
      style={[style, {marginRight: 10}]}
    />
  );
};

export type PostFooterProps = {num_comments: number; score: number};

export const PostFooter: React.FC<PostFooterProps> = ({
  num_comments,
  score,
}) => {
  const friendlyNumComments = friendlyNumber(num_comments);
  const friendlyScore = friendlyNumber(score);

  return (
    <View
      style={{
        paddingHorizontal: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon icon={['far', 'message']} />
      <AwesomeText>{friendlyNumComments}</AwesomeText>
      <Icon icon="award" />
      <AwesomeText>{friendlyScore}</AwesomeText>
    </View>
  );
};
