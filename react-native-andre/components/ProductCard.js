import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoadingImage from './LoadingImage'

class ProductCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <LoadingImage source={this.props.product.images.small_urls[0]} style={styles.headerImage} />
                <View style={styles.productData}>
                    <Text ellipsizeMode='tail' style={styles.description}>{this.props.product.name}</Text>
                    <Text style={styles.price}>Rp. {this.props.product.price.toLocaleString()}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'rgba(140,140,140,0.2)',
        borderBottomWidth: 1,
        borderRadius: 3,
        margin: 2,
        marginTop: 10,
        marginBottom: 10,
        overflow: 'hidden',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerImage: {
        width: '100%',
        height: 200,
        marginBottom: 2,
    },
    productData: {
        height: 100,
        padding: 2,
    },
    description: {
        color: 'rgba(13, 59, 132, 0.5)',
        fontSize: 15,
        padding: 3,
        height: 150,
        marginBottom: 10,
    },
    price: {
        color: 'rgba(255, 20, 10, 0.7)',
        fontSize: 20,
    },
});

export default ProductCard;