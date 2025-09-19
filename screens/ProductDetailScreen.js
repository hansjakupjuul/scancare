import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={{ color: product.good ? 'green' : 'red' }}>
        {product.good ? 'Gode ingredienser' : 'Dårlige ingredienser'}
      </Text>
      <Button title="Tilbage" onPress={() => navigation.goBack()} />
    </View>
  );
};

import styles from '../styles/styles';
export default ProductDetailScreen;
