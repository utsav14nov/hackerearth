/* global history */
import React from 'react'
import '../../public/app.css';


class ItemBox extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	
	handleClick = (item) => {
		this.props.handleAddtoCart(item)
	}

	render(){
		const {itemsObj = {}, className} = this.props
		let discountedPrice=null
		if(itemsObj.discount !=0){
			discountedPrice= (itemsObj.price - (((itemsObj.discount)/100)*(itemsObj.price)))
		}
		return(
			<div className={className} id={itemsObj.id}>
				<div className="align-ctr img-div">
					<img src={itemsObj.img_url}/>
				</div>
				<div className="bottom-item-div">
					<div className="ht-50">
						<span className="pd-5">
							{itemsObj.name}
						</span>
					</div>
					<div className="ht-50 pos-relative">
						<span className="price-span pd-5">
						{
							discountedPrice != null?
								<strike className="pd-5 stk">
									${itemsObj.price}
								</strike>
								:
								<span className="pd-5">
									${itemsObj.price}
								</span>					
						}
						{
							discountedPrice != null?
							<span className="pd-5">
								${discountedPrice}
							</span>
							: null
						}
						</span>
						<span className="add-to-cart-btn pd-5">
							<button className="add-to-cart-btn-style"type="button" onClick={this.handleClick.bind(this,itemsObj)}>Add to cart</button>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default ItemBox