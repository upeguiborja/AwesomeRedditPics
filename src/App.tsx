import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SubredditView, WebView} from './views';
import {Listings} from './api/getSubredditLinksListing';
import './utils/iconLibrary';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

export type StackNavigatorParamsList = {
  Home: undefined;
  Browser: {uri: string};
};

const Stack = createNativeStackNavigator<StackNavigatorParamsList>();
const Tab = createMaterialTopTabNavigator();

const HomeTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hot">
        {() => <SubredditView listing={Listings.Hot} />}
      </Tab.Screen>
      <Tab.Screen name="New">
        {() => <SubredditView listing={Listings.New} />}
      </Tab.Screen>
      <Tab.Screen name="Top">
        {() => <SubredditView listing={Listings.Top} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeTabNavigator} />
          <Stack.Screen
            options={{headerShown: true, headerTitle: 'Reddit'}}
            name="Browser"
            component={WebView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
