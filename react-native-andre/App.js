import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import PromotedProductNavigation from './navigations/PromotedProducts'
import CategoriesNavigation from './navigations/Categories'

const AppNavigator = createMaterialTopTabNavigator({
  Home: PromotedProductNavigation,
  Categories: CategoriesNavigation,
});

const Route = createAppContainer(AppNavigator)

class App extends Component {

  render() {
    return (
      <Route />
    );
  }
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

export default App