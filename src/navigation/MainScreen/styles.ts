/* eslint-disable @typescript-eslint/no-unused-vars */
//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//###########################################

import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  badgeIconView: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    zIndex: 10,
    left: 24,
    bottom: 20,
    padding: 1,
    borderRadius: 20,
    fontSize: 14,
  },
});
