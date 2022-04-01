import React from 'react';
import {SafeAreaView, useColorScheme, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SubredditView} from './views/SubredditView/SubredditView';
import {QueryClient, QueryClientProvider} from 'react-query';

const Tab = createMaterialTopTabNavigator();
const queryClient = new QueryClient();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Top" component={SubredditView} />
            <Tab.Screen name="New" component={HomeScreen} />
            <Tab.Screen name="Hot" component={HomeScreen} />
            <Tab.Screen name="Controversial" component={HomeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
