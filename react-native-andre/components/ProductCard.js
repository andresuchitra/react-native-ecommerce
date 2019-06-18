import React, {Component} from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class ProductCard extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.product.images.small_urls[0]}} style={styles.headerImage} />
                <View style={styles.productData}>
                    <Text>{this.props.product.name}</Text>
                    <Text>Rp. {this.props.product.price}</Text>
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
      borderColor: 'rgba(100,100,100,0.7)',
      borderWidth: 1,
      padding: 2,
      margin: 2,
      marginTop: 5,
      marginBottom: 5,
      height: 300,
      width: '100%'
    },
    headerImage: {
        width: '100%',
        height: 200,
        marginBottom: 2,
    },
    productData: {
        height: 100,
    }
});

export default ProductCard;