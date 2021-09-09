/* eslint-disable @typescript-eslint/no-unused-vars */
//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../../pages/AboutScreen';
import Cart from '../../pages/CartScreen';
import ContactA from '../../pages/ContactAScreen';
import ContactB from '../../pages/ContactBScreen';
import Details from '../../pages/DetailsScreen';
import Home from '../../pages/HomeScreen';
import Input from '../../pages/InputScreen';
import List from '../../pages/ListScreen';
import Login from '../../pages/LoginScreen';
import Output from '../../pages/OutputScreen';
import Password from '../../pages/PasswordScreen';
import Profile from '../../pages/ProfileScreen';
import Register from '../../pages/RegisterScreeen';
import Settings from '../../pages/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Root;
