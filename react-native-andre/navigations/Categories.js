import React, {useState, useEffect} from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import axios from 'axios'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

const Categories = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

    }, categories.length)

    return (
        <View style={styles.container}>
            <FlatList></FlatList>
        </View>
    );
};

Categores.navigationOptions = {
    title: 'Categories'
}

export default Categories