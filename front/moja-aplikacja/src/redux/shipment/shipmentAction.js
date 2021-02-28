import orderProgress from "../../components/Basket/orderProcess"

const sendOrder = order => ({
    type: 'SEND_ORDER',
    payload: order
})
  
export default sendOrder