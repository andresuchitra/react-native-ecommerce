import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ProductCard from '../components/ProductCard'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

const Component = (props) => {
    return (
        <View style={styles.container}>
            <FlatList>
                {this.props.products.map(prd =>
                    <ProductCard product={prd}></ProductCard>
                )}
            </FlatList>
        </View>
    );
};