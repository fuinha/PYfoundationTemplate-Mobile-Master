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
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="ContactA" component={ContactA} />
      <Drawer.Screen name="ContactB" component={ContactB} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Input" component={Input} />
      <Drawer.Screen name="List" component={List} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Output" component={Output} />
      <Drawer.Screen name="Password" component={Password} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Root;
