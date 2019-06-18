import {createStackNavigation, createStackNavigator} from 'react-navigation'
import PromotedProducts from '../screens/PromotedProducts'
import ProductDetail from '../components/ProductDetail'

export default createStackNavigator({
    Promoted: {
        screen: PromotedProducts,
    },
    ProductDetail: {
        screen: ProductDetail,
    }
})