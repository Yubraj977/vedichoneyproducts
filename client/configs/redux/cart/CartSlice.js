import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
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
                state.cartItems[itemIndex].cartQuantity += 1
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
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
        if(state.cartItems[itemIndex].cartQuantity<10){
            state.cartItems[itemIndex].cartQuantity += 1
        }
       },
       clearCart(state){
        state.cartItems=[]
       }

    }
})

export const { addItems, removeItems, addToCart, removeFromCart, decreaseCart,increaseCart,clearCart } = CartSlice.actions
export default CartSlice.reducer