import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ProductCardList from '../components/ProductCardList'
import api from '../api'
import {token} from '../globals'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

function getPromotedProducts() {
    console.log('entering promoted...');
    api.get(`/products?categories_id=${props.cat_id}&categories_name=${props.cat_name}&access_token=${token}`)
        .then(({ data }) => {
            setProducts(data.data)
            console.log(data.data);
        })
        .catch(err => {
            console.log(err);
        })
}

const Products = (props) => {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getPromotedProducts();
    })

    return (
        <View style={styles.container}>
            <ProductCardList products={products}></ProductCardList>
        </View>
    );
};

Products.navigationOptions = {
    title: 'Products'
}

export default Products