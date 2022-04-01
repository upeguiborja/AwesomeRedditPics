import React from 'react';
import {WebView as WebViewNative} from 'react-native-webview';

export const WebView: React.FC = () => {
  return <WebViewNative source={{uri: 'https://reactnative.dev/'}} />;
};
