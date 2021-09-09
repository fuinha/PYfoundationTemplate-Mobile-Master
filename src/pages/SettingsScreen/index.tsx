/* eslint-disable react-native/no-inline-styles */
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

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const BG_IMAGE = require('./images/wallpaper_6.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
var { width } = Dimensions.get('window');

import {
  Character,
  useGetCharactersQuery,
} from '../../common/generated/graphql';

import CharacterCard from '../../common/components/CharacterCard';

const SettingsScreen = (props: any) => {
  const { data, loading } = useGetCharactersQuery();

  if (loading) {
    return (
      <View testID="progress" style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <View
      style={{
        ...styles,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ fontSize: 40 }}>Settings Screen</Text>
      <Text style={{ fontSize: 20 }}>Welcome to the Settings screen</Text>
    </View>
  );
};

export default SettingsScreen;
