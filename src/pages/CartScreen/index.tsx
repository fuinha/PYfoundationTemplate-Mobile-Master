/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { useGetShoppingCartQuery } from '../../common/generated/graphql';

import styles from './styles';

const CartScreen = (props: any) => {
  const navigation = useNavigation();
  const { data } = useGetShoppingCartQuery();

  /*
  const handleNavigation = useCallback(() => {
     navigation.navigate('Home');
  }, [navigation]);
*/
  return (
    <SafeAreaView style={styles.container}>
      {data?.shoppingCart?.numActionFigures ? (
        <>
          <View style={styles.content} testID="fulfilled-cart">
            <Text style={styles.emoji}>🤗</Text>
            <Text
              style={
                styles.subtitle
              }>{`Total number of items: ${data?.shoppingCart.numActionFigures}`}</Text>
            <Text
              style={
                styles.subtitle
              }>{`Total price: G$ ${data?.shoppingCart.totalPrice}`}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.content} testID="empty-cart">
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.title}>Empty cart!</Text>
            <View style={styles.footer}>
              {/* 
              <Button title="Go back to shop" onPress={handleNavigation} />
              */}
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
