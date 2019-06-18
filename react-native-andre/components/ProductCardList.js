import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ProductCard from '../components/ProductCard'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    flatList: {
        width: '100%'
    }
});

const _keyExtractor = (item, index) => item.id;

const ProductCardList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList data={props.products}
            style={styles.flatList}
            numColumns={2}
            renderItem={({ item }) => (
                <ProductCard
                  product={item}
                />
            )}
            keyExtractor={_keyExtractor}
            />
        </View>
    );
};

export default ProductCardList