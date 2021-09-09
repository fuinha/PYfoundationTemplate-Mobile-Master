/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useGetShoppingCartQuery } from '../../common/generated/graphql';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

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

const TabRoutes = createBottomTabNavigator();

const Routes: React.FC = () => {
  const { data } = useGetShoppingCartQuery();

  return (
    <TabRoutes.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        style: {
          height: 64,
          alignItems: 'center',
        },
      }}>
      <TabRoutes.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size * 1.2} color={color} name="home" />
          ),
        }}
      />
      <TabRoutes.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size * 1.2}
              color={color}
              name="format-list-bulleted"
            />
          ),
        }}
      />
      <TabRoutes.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) =>
            data?.shoppingCart?.numActionFigures ? (
              <View style={styles.badgeIconView}>
                <Text style={styles.badge}>
                  {data?.shoppingCart?.numActionFigures}
                </Text>
                <MaterialIcons
                  size={size * 1.2}
                  color={color}
                  name="shopping-cart"
                />
              </View>
            ) : (
              <MaterialIcons
                size={size * 1.2}
                color={color}
                name="shopping-cart"
              />
            ),
        }}
      />
    </TabRoutes.Navigator>
  );
};
export default Routes;

const styles = StyleSheet.create({
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
