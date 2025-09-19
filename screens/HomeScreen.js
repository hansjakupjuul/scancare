import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hudpleje Tjek</Text>
      <Button title="Se produkter" onPress={() => navigation.navigate('ProductList')} />
    </View>
  );
};

import styles from '../styles/styles';
export default HomeScreen;
