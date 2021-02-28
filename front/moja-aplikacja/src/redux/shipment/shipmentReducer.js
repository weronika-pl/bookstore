const INITIAL_STATE = {
    order: {}
  }
  
  const shipmentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SEND_ORDER':
        return {
          ...state, 
          order: action.payload
        }
      default:
        return state
    }
  }
  
  export default shipmentReducer