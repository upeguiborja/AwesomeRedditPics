import React from 'react';
import {View, ViewProps} from 'react-native';
import {AwesomeText} from '../AwesomeText';

export const PostHeader: React.FC<ViewProps> = ({style}) => {
  return (
    <View style={[{paddingHorizontal: 10}, style]}>
      <AwesomeText style={{marginBottom: 10, color: '#798389'}}>
        u/onewordpoet • 13h
      </AwesomeText>
      <AwesomeText style={{fontWeight: 'bold', fontSize: 18}}>
        I just went outside to do some watercolor painting at the park. This is
        what I ended up with (oc)
      </AwesomeText>
    </View>
  );
};
