import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {WebView as WebViewNative} from 'react-native-webview';
import {StackNavigatorParamsList} from '../../App';

const Spinner = () => {
  return (
    <ActivityIndicator
      size="large"
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f2f2f2',
      }}
    />
  );
};

type WebViewProps = NativeStackScreenProps<StackNavigatorParamsList, 'Browser'>;

export const WebView: React.FC<WebViewProps> = ({route}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{flex: 1}}>
      <WebViewNative
        onLoad={() => setIsLoading(false)}
        source={{
          uri:
            route.params.uri ?? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        }}
      />
      {isLoading && <Spinner />}
    </View>
  );
};
