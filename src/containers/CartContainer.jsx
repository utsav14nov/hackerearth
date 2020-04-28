import { connect } from 'react-redux'
import Cart from '../components/Cart'
import {addToCart,updateItemCount,updateCartTotal} from '../actions/CartAction'

const mapStateToProps = state => {
	const {cartReducer} = state;
	return{
		cartReducer
	}
};

const mapDispatchToProps = dispatch => ({
	addToCart(cart){
		dispatch(addToCart(cart))
	},
	updateItemCount(count){
		dispatch(updateItemCount(count))
	},
	updateCartTotal(total){
		dispatch(updateCartTotal(total))
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart)