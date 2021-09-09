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
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: SCREEN_WIDTH * 0.95,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerBackIcon: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 20,
    marginRight: 10,
    color: '#ffffff',
  },
  title: {
    marginRight: 40,
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
  },
  image: {
    marginLeft: 20,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionFrame: {
    backgroundColor: '#52B69A',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#52B69A',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonStyle: {
    backgroundColor: '#6cc9e0',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 110,
    marginRight: 110,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  SectionStyleTextEntrarCon: {
    marginLeft: 120,
  },
  SectionStyleIcon: {
    marginTop: 3,
    marginLeft: 135,
  },
  SectionStyleIconLock: {
    marginTop: 3,
    marginLeft: 120,
  },
  buttonStyleOlvide: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontSize: 10,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
  },
  SectionStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 40,
    marginTop: 35,
    marginLeft: 35,
    marginRight: 35,
    margin: 15,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
  },
  inputStyle: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    paddingLeft: 15,
    paddingRight: 15,
  },
  registerTextStyle: {
    color: 'rgba(52, 52, 52, 0.6)',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: 120,
    height: 35,
    borderWidth: 1,
    borderRadius: 8,

    marginLeft: 15,
    marginRight: 15,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  forgotStyle: {
    height: 100,
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  MessageContainer: {
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  titleMsg: {
    fontSize: 20,
    marginBottom: 2,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  MessageBtn: {
    marginRight: 10,
  },
  returnButtonText: {
    color: '#e02041',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  messages: {
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#33c37d',
    marginBottom: 20,
  },
  messageReturnButton: {},
});
