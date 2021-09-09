/* eslint-disable @typescript-eslint/no-unused-vars */
//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../../pages/DetailsScreen';
import ContactAScreen from '../../pages/ContactAScreen';
import ContactBScreen from '../../pages/ContactBScreen';

const BG_IMAGE = require('./images/wallpaper_6.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
var { width } = Dimensions.get('window');

const ContactScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact A" component={ContactAScreen} />
      <Stack.Screen name="Contact B" component={ContactBScreen} />
    </Stack.Navigator>
  );
};

export default ContactScreen;
