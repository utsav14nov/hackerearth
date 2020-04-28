/* global history */
import React from 'react'
import underscore from 'underscore'
import ItemBox from './ItemBox';
import '../../public/app.css';


class Items extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	componentDidMount() {
		if(underscore.isUndefined(this.props.itemsReducer.items) || underscore.isEmpty(this.props.itemsReducer)){
			this.props.getItems()
		}
	}

	redirectToCart() {
		window.location = "/cart"
	}

	handleAddtoCart = (item) => {
		let {cartReducer={},addToCart,updateItemCount} = this.props
		let {cart = {}, cartCount=0} = cartReducer
		if(cart.hasOwnProperty(item.id)){
			let {qty} = cart[item.id]
			cart[item.id]['qty'] = qty+1
		}else{
			cart[item.id] = {
				qty:1,
				name:item.name,
				price:item.price,
				discount:item.discount,
				type:item.type
			}
		}
		addToCart(cart)
		cartCount = cartCount+1
		updateItemCount(cartCount)
	} 

	getItemBoxes = (items) => {
		let _this=this
		let itemsBoxesList = null
		if(underscore.isEmpty(items) == false){

			itemsBoxesList = items.map(function(item,index){
				let className = "item-box"

				if(index%4 !=3){
					className=className+" margin-rt"
				}

				return (
					<ItemBox key={index} className={className} itemsObj={item} handleAddtoCart={_this.handleAddtoCart}/>
				)
			})
		}

		return <div className="item-body">{itemsBoxesList}</div>
	}

	getHeader = (cart,cartCount) => {
		return (
			<div className="header">
				<div className="column">
					All Items
				</div>
				<div className="column">
					{ underscore.isEmpty(cart) === false
						?<button className="float-rt go-to-cart-style" type="button" onClick={this.redirectToCart}>Go to Cart | {cartCount}</button>
						:null
					}
				</div>
			</div>
		)
	}

	render(){
		const {itemsReducer = {},cartReducer} = this.props
		const {items = {}} = itemsReducer
		const {cart = {}, cartCount=0} = cartReducer
		return(
			<div className="main-item-container">
				{this.getHeader(cart,cartCount)}
				{this.getItemBoxes(items)}
			</div>
		)
	}
}

export default Items