/* global history */
import React from 'react'
import CartRow from './CartRow'

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
		};
	}


	componentDidMount(){
		this.calculateCartTotal()
	}

	calculateCartTotal(){
		const {cartReducer,addToCart,updateCartTotal} = this.props
		let {cart = {}, cartCount=0} = cartReducer
		let totalCost = 0
		let totalDiscount=0
		let typeDiscount = 0
		for(let item in cart){
			const {qty,price,discount,type} = cart[item] 
			totalCost = totalCost+(qty*price)
			totalDiscount = totalDiscount+((discount/100)*(qty*price))
			if(type == 'fiction'){
				let d = (15/100)*qty*price
				typeDiscount = typeDiscount+d
			}	
		}	
		
		let orderTotal = totalCost-(totalDiscount+typeDiscount)
		updateCartTotal({totalCost,totalDiscount,typeDiscount,orderTotal})
	}

	decreaseQty = (id) =>{
		const {cartReducer,addToCart,updateItemCount} = this.props
		let {cart = {}, cartCount=0} = cartReducer
		if(cart.hasOwnProperty(id) === true){
			let qty = cart[id].qty
			if(qty === 1){
				delete(cart[id])
			}else{
				cart[id]['qty'] = qty-1

			}
			cartCount = cartCount-1
		}
		addToCart(cart)
		updateItemCount(cartCount)
		this.calculateCartTotal()
	}

	increaseQty = (id) => {
		const {cartReducer,addToCart,updateItemCount} = this.props
		let {cart = {}, cartCount=0} = cartReducer
		if(cart.hasOwnProperty(id) === true){
			let qty = cart[id].qty
			cart[id]['qty'] = qty+1
			cartCount = cartCount+1
		}
		addToCart(cart)
		updateItemCount(cartCount)
		this.calculateCartTotal()
	}

	removeItem = (id) => {
		const {cartReducer,addToCart,updateItemCount} = this.props
		let {cart = {}, cartCount=0} = cartReducer
		if(cart.hasOwnProperty(id) === true){
			let qty = cart[id].qty
			delete(cart[id])
			cartCount = cartCount-qty
		}
		addToCart(cart)
		updateItemCount(cartCount)
		this.calculateCartTotal()
	}

	getOrderTable = (cart,cartCount) => {
		let _this=this
		let itemRows = Object.keys(cart).map(function(key,index){
			return(
				<CartRow key = {index} 
						 item={cart[key]} 
						 id={key} 
						 decreaseQty={_this.decreaseQty}
						 increaseQty={_this.increaseQty}
						 removeItem={_this.removeItem} 
				/>
			)
		})

		return (
			<table>
				<thead>
					<tr>
						<th>items({cartCount})</th>
						<th>Qty</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{itemRows}
				</tbody>
			</table>
		)
	}

	redirectToItemPage() {
		window.location = "/"
	}

	render(){
		const {cartReducer} = this.props
		const {cart = {}, cartCount=0, cartTotal={}} = cartReducer
		return(
			<div className="main-item-container">
				<div className="order-summary-div">
					<div>
						<span>
							<button className="plus-minus-btn" type="button" onClick={this.redirectToItemPage}>{"<"}</button>
						</span>
						<span>
							Order Summary
						</span>
					</div>
					{this.getOrderTable(cart,cartCount)}	
				</div>
				<div className="cart-total-div">
					<div className="ft-bold pd-5">Total</div>
					<div className="pos-rel">
						<span className="pos-abs left pd-10">Items({cartCount})</span>
						<span className="pos-abs right pd-10">: ${cartTotal.totalCost}</span>
					</div><br/><br/>
					<div className="pos-rel">
						<span className="pos-abs left pd-10">Discount</span>
						<span className="pos-abs right pd-10">: ${cartTotal.totalDiscount}</span>
					</div><br/>
					<div className="pos-rel">
						<span className="pos-abs left pd-10">Type discount</span>
						<span className="pos-abs right pd-10">: ${cartTotal.typeDiscount}</span>
					</div>
					<br/><br/>
					<div className="pos-rel ht-35 bg-grey">
						<span className="pos-abs left pd-10 bottom">Order total</span>
						<span className="pos-abs right pd-10 bottom">${cartTotal.orderTotal}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Cart