import {createStackNavigator} from 'react-navigation'
import Categories from '../screens/Categories'
import Products from '../screens/Products'

export default createStackNavigator({
    Categories: {
        screen: Categories,
    },
    Products: {
        screen: Products,
        path: `:category`,
    }
})