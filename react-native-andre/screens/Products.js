import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
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

const Products = (props) => {
    const [products, setProducts] = useState([])

    category_name = props.navigation.getParam('category_name');;
    category_id = props.navigation.getParam('category_id');
    console.log(category_name, category_id);
    Products.navigationOptions.title = category_name;

    function getProducts() {
        api.get(`/products?category_id=${category_id}&access_token=${token}`)
            .then(({ data }) => {
                console.log('got...',data.data);
                setProducts(data.data)
            })
            .catch(err => {
                console.log('products erorr..',err);
            })
    }
    
    useEffect(() => {
        console.log('called products...', token);
        getProducts();
    },[token, category_id])

    return (
        <View style={styles.container}>
            <ProductCardList products={products}></ProductCardList>
        </View>
    );
};

Products.navigationOptions = ({navigation, navigationOptions}) => {
    return {
        title: navigation.getParam('category_name')
    }
}

export default Products