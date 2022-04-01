import React from 'react';
import {View} from 'react-native';
import {AwesomeText} from '../AwesomeText';

export const ImagePostHeader: React.FC = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <AwesomeText>u/onewordpoet • 13h</AwesomeText>
      <AwesomeText style={{fontWeight: 'bold'}}>
        I just went outside to do some watercolor painting at the park. This is
        what I ended up with (oc)
      </AwesomeText>
    </View>
  );
};
