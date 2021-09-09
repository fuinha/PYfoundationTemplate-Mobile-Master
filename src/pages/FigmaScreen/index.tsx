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

const BG_IMAGE = require('../../assets/images/wallpaper_6.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
var { width } = Dimensions.get('window');

import {
  Character,
  useGetCharactersQuery,
} from '../../common/generated/graphql';

import CharacterCard from '../../common/components/CharacterCard';

const FigmaScreen = () => {
  return (
    <View>
      {/* PAGE */}

      {/* PAGE */}
    </View>
  );
};

export default FigmaScreen;
