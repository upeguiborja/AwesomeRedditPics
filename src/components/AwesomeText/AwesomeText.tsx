import React from 'react';
import {Text} from 'react-native';
import {TextProps} from 'react-native';

export const AwesomeText: React.FC<TextProps> = ({style, ...props}) => (
  <Text {...props} style={[{color: '#1a1a1b'}, style]}></Text>
);
