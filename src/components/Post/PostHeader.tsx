import React from 'react';
import {View, ViewProps} from 'react-native';
import {AwesomeText} from '../AwesomeText';

export type PostHeaderProps = ViewProps & {
  title: string;
  author: string;
  created: number;
};

export const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  author,
  style,
  ...props
}) => {
  return (
    <View {...props} style={[{paddingHorizontal: 10}, style]}>
      <AwesomeText style={{marginBottom: 10, color: '#798389'}}>
        u/{author} • 13h
      </AwesomeText>
      <AwesomeText style={{fontWeight: 'bold', fontSize: 18}}>
        {title}
      </AwesomeText>
    </View>
  );
};
