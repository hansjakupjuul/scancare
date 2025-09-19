import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PRODUCTS = [
  { id: '1', name: 'Face Cleanser', good: true },
  { id: '2', name: 'Moisturizer', good: false },
  { id: '3', name: 'Sunscreen', good: true },
];

const ProductListScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produkter</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

import styles from '../styles/styles';
export default ProductListScreen;
