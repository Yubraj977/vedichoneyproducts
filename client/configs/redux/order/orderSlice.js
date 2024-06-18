import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    shippingInfo: {},
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += action.payload.cartQuantity
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: action.payload.cartQuantity  }
                state.cartItems.push(tempProduct)
            }
         

        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
            state.cartItems = nextCartItems
        },
       decreaseCart(state,action){
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity -= 1
            }
            else if(state.cartItems[itemIndex].cartQuantity===1){
                const nextCartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
                state.cartItems = nextCartItems

            }
        
       },
       increaseCart(state,action){
        const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
        if(state.cartItems[itemIndex].cartQuantity<state.cartItems[itemIndex].stock){
            state.cartItems[itemIndex].cartQuantity += 1
        }
        
       },
       clearCart(state){
        state.cartItems=[]
       },
       getTotal(state,action){
      let{total,quantity}=  state.cartItems.reduce((cartTotal,cartItem)=>{
           const {price,cartQuantity}=cartItem;
           const itemTotal=price*cartQuantity;
           cartTotal.total +=itemTotal
           cartTotal.quantity +=cartQuantity
           return cartTotal
        },{
                total:0,
                quantity:0
            }
        )
        state.cartTotalAmount=total
        state.cartTotalQuantity=state.cartItems.length
       },
       createOrder(state,action){
        
       }

    }
})

export const { addItems, removeItems, addToCart, removeFromCart, decreaseCart,increaseCart,clearCart,getTotal } = CartSlice.actions
export default CartSlice.reducer