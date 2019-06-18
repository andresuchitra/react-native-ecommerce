import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
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
    catContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
    },
    loading: {
        height: 100,
        width: 100,
    }
});

const Categories = (props) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        api.get(`/categories?access_token=${token}`)
        .then(({ data }) => {
            console.log(data.data);
            setCategories(data.data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [categories.length])

    if(loading) {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/loading.gif')} style={styles.loading}/>
            </View>
        );
    }
    else {
        console.log(props.categories);
        return (
            <View style={styles.container}>
                <FlatList
                    data={props.categories}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => {
                        <View style={styles.catContainer}>
                            <Text>{item.name}</Text>
                        </View>
                    }}
                />
            </View>
        );

    }
};

Categories.navigationOptions = {
    title: 'Categories'
}

export default Categories