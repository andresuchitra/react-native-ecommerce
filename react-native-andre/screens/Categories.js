import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Image, Text, TouchableHighlight } from 'react-native'
import api from '../api'
import {token} from '../globals'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    catContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100,100,100,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        minWidth: '100%'
    },
    loading: {
        height: 100,
        width: 100,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
    },
    itemText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#0d3b84',
        textTransform: 'uppercase',
    },
});

renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

const Categories = (props) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        api.get(`/categories?access_token=${token}`)
        .then(({ data }) => {
            setCategories(data.data);
        })
        .catch(err => {
            console.log('categories error...',token,err);
        })
        .finally(() => {
            setLoading(false);
        })

    }, [token])

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
                <FlatList
                    style={{ width: '100%' }}
                    ItemSeparatorComponent={renderSeparator}
                    data={categories}
                    keyExtractor={(item) => item.name}
                    renderItem={({item, index, separators}) => (
                        <TouchableHighlight
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}
                            onPress={() => props.navigation.navigate(`Products`, {category_name: item.name, category_id: item.id})}
                            style={styles.button}
                        >
                            <Text style={styles.itemText}>{item.name}</Text>
                        </TouchableHighlight>
                    )}
                />
            </View>
        );

    }
};

Categories.navigationOptions = {
    title: 'Categories'
}

export default Categories