import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/interfaces/NavigationInterface';
import ProductList from '@src/screens/ProductList';
import ProductDetails from '@src/screens/ProductDetails';
import SearchProduct from '@src/screens/SearchProduct';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={ProductList} name="ProductList" />
      <Stack.Screen component={ProductDetails} name="ProductDetails" />
      <Stack.Screen component={SearchProduct} name="SearchProduct" />
    </Stack.Navigator>
  );
}
