const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ITEM_LIST':
        return {
        ...state,
        items:action.data
      }
    default:
      return state
  }
}
export default itemsReducer