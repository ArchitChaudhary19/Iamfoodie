import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[]
}

// card Slice 
const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers: {

         // add to cart
        addToCart:(state, action)=>{

            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if(ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1}
                state.carts = [...state.carts, temp]
            }
            },

            // remove particular items ( delete/bin sign )
            removeToCart:(state,action)=> {
                const data = state.carts.filter((ele)=>ele.id !== action.payload);
                state.carts = data
            },

            //remove single items ( - sign)
            removeSingleItems:(state,action)=>{
                const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

                if(state.carts[ItemIndex_dec].qnty >=1){
                    state.carts[ItemIndex_dec].qnty -=1
                }
            },

            // clear cart
            emptycartItem:(state,action)=>{
                state.carts = []
            }
    }
})

export const {addToCart, removeToCart, removeSingleItems, emptycartItem} = cartSlice.actions;

export default cartSlice.reducer;