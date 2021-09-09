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

const RegisterScreen = () => {
  const { data, loading } = useGetCharactersQuery();

  if (loading) {
    return (
      <View testID="progress" style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <KeyboardAvoidingView enabled>
            {/* HEADER */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.returnButton} onPress={() => {}}>
                <View style={styles.headerMenuIcon}>
                  <Icon name="bars" size={30} color="grey" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.returnButton} onPress={() => {}}>
                <View style={styles.headerMenuIcon2}>
                  <Icon name="angle-double-left" size={35} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
            {/* HEADER */}
            {/* Registro */}
            <View style={styles.mainBody}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>Registro de Usuario</Text>
                <View>
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      source={require('../../assets/images/DentalCardLogo.png')}
                      style={{
                        width: '50%',
                        height: 200,
                        resizeMode: 'contain',
                        margin: 10,
                      }}
                    />
                  </View>
                  {/* frame */}
                  <View style={styles.SectionFrame}>
                    {/* Nombre */}
                    <View style={styles.SectionStyle}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleNombre}
                          onChangeText={() => {}}
                          placeholder={'Nombre'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.SectionStyleIconNombre}>
                        <Icon name="user" size={30} color="grey" />
                      </View>
                    </View>
                    {/* Cedula */}
                    <View style={styles.SectionStyle}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleCedula}
                          onChangeText={() => {}}
                          placeholder={'C.I.'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.SectionStyleIconCedula}>
                        <Icon name="id-card" size={30} color="grey" />
                      </View>
                    </View>

                    {/* Email */}
                    <View style={styles.SectionStyle}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyle}
                          onChangeText={() => {}}
                          placeholder={'Correo Electrónico'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.SectionStyleIconMail}>
                        <Icon name="envelope" size={30} color="grey" />
                      </View>
                    </View>
                    {/* Email */}
                    <View style={styles.SectionStyle}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyle}
                          onChangeText={() => {}}
                          placeholder={'Contraseña'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                      <View style={styles.SectionStyleIconLock}>
                        <Icon name="lock" size={30} color="grey" />
                      </View>
                    </View>
                    {/* MOLDURA */}
                    <TouchableOpacity
                      style={styles.buttonStyleOlvide}
                      activeOpacity={0.5}
                      onPress={() => {}}>
                      <Text style={styles.buttonTextStyle}>
                        ¿Olvidaste la Contraseña? click aquí
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* FACE */}
                  <View style={styles.SectionStyleTextEntrarCon}>
                    <TextInput
                      style={styles.inputStyle}
                      placeholder={'Entrar con:'}
                      placeholderTextColor="white"
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#3b5998',
                      width: width - 280,
                      alignItems: 'center',
                      padding: 5,
                      borderRadius: 10,
                      marginBottom: 30,
                      marginTop: 5,
                      marginLeft: 130,
                    }}>
                    <Icon name="facebook" size={20} color="white" />
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Facebook
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => {}}>
                    <Text style={styles.buttonTextStyle}>Confirmar</Text>
                  </TouchableOpacity>

                  <View style={styles.forgotStyle}>
                    <View style={styles.confirmarButton}>
                      <Text
                        style={styles.registerTextStyleConfirmar}
                        onPress={() => {}}>
                        Confirmar
                      </Text>
                    </View>
                    <View style={styles.cancelarButton}>
                      <Text
                        style={styles.registerTextStyleCancelar}
                        onPress={() => {}}>
                        Cancelar
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            {/* LOGIN */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

export default RegisterScreen;
