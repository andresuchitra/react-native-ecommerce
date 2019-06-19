import React, {Component} from 'react'
import {Image, View, ActivityIndicator} from 'react-native'

class LoadingImage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: true
      }
    }

    onLoaded = () => {
        this.setState({ loading: false }) 
    }
    render() {
        let img;

        if(this.props.source.toString().includes('http')) {
            img = { uri: this.props.source }
        }
        else 
        {
            img = require('../assets/loading.gif')
        }

        return (
            <>
            {this.state.loading &&
                <View style={this.props.style}>
                  <ActivityIndicator size="large" color="#0000ff" /> 
                </View>
            }
            <Image source={img} onLoadEnd={this.onLoaded} style={this.props.style} />
            </>
        );
    }
  }

  const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerImage: {
        width: '100%',
        height: 200,
        marginBottom: 2,
    },
  }

  export default LoadingImage