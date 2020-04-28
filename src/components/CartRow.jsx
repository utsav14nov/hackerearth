/* global history */
import React from 'react'

class CartRow extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	handleDecrease = (id) => {
		this.props.decreaseQty(id)
	}

	handleIncrease = (id) => {
		this.props.increaseQty(id)
	}

	handleRemove = (id) => {
		this.props.removeItem(id)
	}

	render(){
		const {item,id} = this.props
		return(
			<tr id={id}>
				<td className="item-cart-div">
				<div className="pos-rel">
					<span>{item.name}</span>
					<span className="float-rt">
						<button className="margin-5 plus-minus-btn" type="button" onClick={this.handleRemove.bind(this,id)}>X</button>
					</span>
				</div>
				</td>
				<td className="align-ctr">
					<button className="margin-5 plus-minus-btn" type="button" onClick={this.handleDecrease.bind(this,id)}>-</button>
					<span className="item-cart-div">{item.qty}</span>
					<button className="margin-5 plus-minus-btn" type="button" onClick={this.handleIncrease.bind(this,id)}>+</button>
				</td>
				<td className="align-ctr">
					{item.price}
				</td>
			</tr>
		)
	}
}

export default CartRow