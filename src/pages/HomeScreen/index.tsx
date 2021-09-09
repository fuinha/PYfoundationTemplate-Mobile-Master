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
  Button,
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

const HomeScreen = (props: any) => {
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
                <Text style={styles.title}>Area Personal</Text>
                <View>
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      source={require('../../assets/images/CarnetDigitalDentalCard.png')}
                      style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'contain',
                        margin: 10,
                      }}
                    />
                    <Text style={styles.title1}>
                      Dependiente 1 Lucia Maria Cáceres
                    </Text>
                    <Text style={styles.title2}>
                      Dependiente 2 Antônio Cáceres
                    </Text>
                  </View>
                  {/* Botão Atendimento */}
                  <View style={styles.groupButton}>
                    <View style={styles.atencionButton}>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          backgroundColor: '#007F5F',
                          width: width - 230,
                          alignItems: 'center',
                          padding: 5,
                          borderRadius: 10,
                          marginBottom: 30,
                          marginTop: 5,
                          marginLeft: 40,
                        }}>
                        <Icon name="comments" size={70} color="white" />
                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Atención al Cliente
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.administracionButton}>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          backgroundColor: '#007F5F',
                          width: width - 230,
                          alignItems: 'center',
                          padding: 5,
                          borderRadius: 10,
                          marginBottom: 30,
                          marginTop: 5,
                          marginLeft: 30,
                        }}>
                        <Icon name="file" size={70} color="white" />
                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Administración
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.emergencyButton}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        backgroundColor: 'red',
                        width: width - 65,
                        alignItems: 'center',
                        padding: 5,
                        borderRadius: 10,
                        marginBottom: 30,
                        marginTop: 5,
                        marginLeft: 20,
                      }}>
                      <Icon name="ambulance" size={30} color="white" />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        Ambulancia
                      </Text>
                    </TouchableOpacity>
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

export default HomeScreen;
