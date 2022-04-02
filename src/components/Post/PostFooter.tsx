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

export type PostFooterProps = {
  num_comments: number;
  ups: number;
  downs: number;
};

export const PostFooter: React.FC<PostFooterProps> = ({
  num_comments,
  ups,
  downs,
}) => {
  const friendlyNumComments = friendlyNumber(num_comments);
  const friendlyUps = friendlyNumber(ups);
  const friendlyDowns = friendlyNumber(downs);

  return (
    <View
      style={{
        paddingHorizontal: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon icon={['far', 'message']} />
      <AwesomeText style={{marginRight: 15}}>{friendlyNumComments}</AwesomeText>
      <Icon icon="arrow-circle-up" />
      <AwesomeText style={{marginRight: 15}}>{friendlyUps}</AwesomeText>
      <Icon icon="arrow-circle-down" />
      <AwesomeText style={{marginRight: 15}}>{friendlyDowns}</AwesomeText>
    </View>
  );
};
