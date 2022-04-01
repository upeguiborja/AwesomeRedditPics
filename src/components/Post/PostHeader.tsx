import React from 'react';
import {View, ViewProps} from 'react-native';
import {friendlyTimedelta} from '../../utils/friendlyTimedelta';
import {AwesomeText} from '../AwesomeText';

export type PostHeaderProps = ViewProps & {
  title: string;
  author: string;
  created_utc: number;
};

export const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  author,
  style,
  created_utc,
  ...props
}) => {
  return (
    <View {...props} style={[{paddingHorizontal: 10}, style]}>
      <AwesomeText
        style={{
          height: 30,
          color: '#798389',
          fontSize: 12,
          textAlignVertical: 'center',
        }}>
        u/{author} • {friendlyTimedelta(Date.now() / 1000 - created_utc)}
      </AwesomeText>
      <AwesomeText style={{fontWeight: '500', fontSize: 18}}>
        {title}
      </AwesomeText>
    </View>
  );
};
