import { connect } from 'react-redux'
import Items from '../components/Items'
import {itemsList} from '../actions/ItemsAction'
import {addToCart,updateItemCount} from '../actions/CartAction'
import {ITEM_LIST_API_URL} from '../config'
import data from '../test/mock.js'

const mapStateToProps = state => {
	const {itemsReducer,cartReducer} = state;
	return{
		itemsReducer,
		cartReducer
	}
};

const mapDispatchToProps = dispatch => ({
	getItems(){
		
		/* This is the actual code to fetch data from Api 
			but due to CORS enabled at the Api endpoint,
			It could not be fetched an therefor data is been mocked in the file*/

		// fetch(ITEM_LIST_API_URL,{
		// 	credentials:'include',
		// 	method:'GET',
		// 	headers: {
        //        'Accept': 'application/json',
        //        'Content-Type': 'application/json'
        //    }
		// })
		// .then(function(response){
		// 	if(response.statusText == "OK" && response.status == 200){
		// 		dispatch(itemsList(response.json))
		// 	}else{
		// 		dispatch(itemsList({}))
		// 	}
		// })
		// .catch(function(error){
		// 		dispatch(itemsList({}))
		// })
		console.log(data)
		try{
			dispatch(itemsList(data))
		}catch(e){
			dispatch(itemsList({}))
		}
	},
	addToCart(cart){
		dispatch(addToCart(cart))
	},
	updateItemCount(count){
		dispatch(updateItemCount(count))
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Items)