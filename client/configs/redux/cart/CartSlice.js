import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartItems:[1,2,3],
    TotalItems:3,
    TotalPrice:42,
}
  
const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItems:(state,action)=>{
            const item=action.payload
            state.cartItems.push(item)
            state.TotalItems+=1;
            state.TotalPrice+=item.price
        },
        removeItems:(state,action)=>{
            const itemId=action.payload
            state.cartItems=state.cartItems.filter((item)=>item.id!==item.id)
            state.TotalItems-=1;

        },

    }
})

export const {addItems,removeItems}=CartSlice.actions
export default CartSlice.reducer