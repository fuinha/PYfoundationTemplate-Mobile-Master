/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createApolloClient } from '../common/config/apollo-client';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../navigation/MainScreen';
import Root from '../navigation/Roots';

// import Routes from '../navigation/Routes';

const apolloClient = createApolloClient();
const Stack = createStackNavigator();

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
