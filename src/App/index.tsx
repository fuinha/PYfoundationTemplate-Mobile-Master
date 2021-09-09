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

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </ApolloProvider>
  );
};

export default App;
