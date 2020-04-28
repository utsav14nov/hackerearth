export const addToCart = cart => {
	return {
		type:'ADD_CART',
		cart
	}
}

export const updateItemCount = count => {
	return {
		type:'UPDATE_ITEM_COUNT',
		count
	}
}

export const updateCartTotal = total => {
	return {
		type:'UPDATE_CART_TOTAL',
		total
	}	
}