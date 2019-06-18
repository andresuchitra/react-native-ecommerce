import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ProductCardList from '../components/ProductCardList'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

const PromotedProducts = (props) => {
    return (
        <View style={styles.container}>
            <ProductCardList data={this.props.products}></ProductCardList>
        </View>
    );
};

PromotedProducts.navigationOptions = {
    title: 'Promoted Products'
}

export default Component