const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cart:action.cart
      }
    case 'UPDATE_ITEM_COUNT': 
      return {
        ...state,
        cartCount:action.count
      }
    case 'UPDATE_CART_TOTAL': 
      return {
        ...state,
        cartTotal:action.total
      }
    default:
      return state
  }
}
export default cartReducer