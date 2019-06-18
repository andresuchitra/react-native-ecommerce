import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
            <Text>{this.props.product.name}</Text>
        </View>
    );
};