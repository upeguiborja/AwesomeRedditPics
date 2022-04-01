import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SubredditView} from './views/SubredditView';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Listings} from './api/getSubredditLinksListing';

const Tab = createMaterialTopTabNavigator();
const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
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
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
