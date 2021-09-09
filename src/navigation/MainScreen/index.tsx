/* eslint-disable @typescript-eslint/no-unused-vars */
//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Root from '../Roots';

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

const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'ios-home';

          if (route.name === 'Home') {
          } else if (route.name === 'Details') {
            iconName = 'ios-list';
          } else if (route.name === 'Contact') {
            iconName = 'ios-call';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Root" component={Root} />
    </Tab.Navigator>
  );
};

export default MainScreen;
