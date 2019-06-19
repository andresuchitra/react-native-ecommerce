import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import ProductCardList from '../components/ProductCardList'
import LoadingImage from '../components/LoadingImage'
import api from '../api'
import { token, requestToken, refreshToken} from '../globals'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(72, 158, 249, 0.1)',
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
    
    function getPromotedProducts(newToken) {
        api.get(`/promoted-products?access_token=${newToken}`)
                .then(({ data }) => {
                    setProducts(data.data)
                })
                .catch(err => {
                    // console.log('home page error --> ',err);
                })
                .finally(() => {
                    setLoading(false);
                })
    }

    useEffect(() => {
        setLoading(true)

        if(!token) {
            requestToken()
            .then(({data}) => {
                refreshToken(data.access_token);
                getPromotedProducts(data.access_token)
            })
            .catch(err => {
              console.log(err);
            })
        }
        else {
            getPromotedProducts();
        }

    }, [token])

    if(loading) {
        return (
            <View style={styles.container}>
                <LoadingImage source={require('../assets/loading.gif')} style={styles.loading}/>
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