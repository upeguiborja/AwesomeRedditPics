import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SubredditView, WebView} from './views';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Listings} from './api/getSubredditLinksListing';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

export type StackNavigatorParamsList = {
  Home: undefined;
  Browser: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParamsList>();
const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

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
            options={{headerShown: true, headerTitle: 'Hello'}}
            name="Browser"
            component={WebView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
