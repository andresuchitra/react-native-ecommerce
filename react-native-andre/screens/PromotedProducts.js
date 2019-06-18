import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import ProductCardList from '../components/ProductCardList'
import api from '../api'
import {token} from '../globals'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loading: {
        height: 100,
        width: 100,
    }
});

const PromotedProducts = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        api.get(`/promoted-products?access_token=${token}`)
        .then(({ data }) => {
            setProducts(data.data)
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [products.length])

    if(loading) {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/loading.gif')} style={styles.loading}/>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <ProductCardList products={products}></ProductCardList>
            </View>
        );

    }
};

PromotedProducts.navigationOptions = {
    title: 'Promoted Products'
}

export default PromotedProducts