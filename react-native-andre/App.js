import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandomCat from './screens/PromotedProducts'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import PromotedProductNavigation from './navigations/PromotedProducts'
import CategoriesNavigation from './navigations/Categories'

const AppNavigator = createMaterialTopTabNavigator({
  Home: PromotedProductNavigation,
  Categories: CategoriesNavigation,
});

export default function App() {
  const Route = createAppContainer(AppNavigator)
  return (<Route />)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
});
