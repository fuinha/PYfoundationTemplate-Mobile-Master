/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import {
  Character,
  useGetCharactersQuery,
} from '../../common/generated/graphql';
import styles from './styles';

import CharacterCard from '../../common/components/CharacterCard';

const ListScreen = () => {
  const { data, loading } = useGetCharactersQuery();

  if (loading) {
    return (
      <View testID="progress" style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container} testID="container">
      <FlatList
        data={data?.characters?.results}
        renderItem={({ item }) => <CharacterCard data={item as Character} />}
        contentContainerStyle={styles.characterList}
      />
    </View>
  );
};
export default ListScreen;
