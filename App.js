import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Forside' }} />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Produkter' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Produktdetaljer' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
