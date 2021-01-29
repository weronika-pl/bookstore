import { handleAddToCart, handleRemoveFromCart } from "./basketUtils";

const INITIAL_STATE = {
    shoppingList: []
  }
  
  const basketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          shoppingList: handleAddToCart({
            list: state.shoppingList,
            book: action.payload
          })
        }
      case 'REMOVE_BOOK':
        return {
            ...state,
            shopppingList: handleRemoveFromCart({
                list: state.shoppingList,
                book: action.payload
            })
        }
        default:
        return state
    }
  }
  
  export default basketReducer