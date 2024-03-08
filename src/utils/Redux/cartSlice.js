import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [],
        itemId: []
    },
    reducers:{
        addItem: (state, action)=>{
            const index = state.items.findIndex(item=>item.productId === action.payload.productId);
            if(index !== -1){
                state.items[index].quantity = action.payload.quantity;
            }else{
                state.items.push(action.payload);
                state.itemId.push(Number(action.payload.productId));
            }
        },
        removeItem: (state, action)=>{
            const index = state.items.findIndex(item=>item.productId === action.payload);
            state.items.splice(index, 1);
            state.itemId.splice(index, 1);
        },
        clearCart: (state, action)=>{
            state.items = [];
            state.itemId = [];
        },
        updateCart:(state, action)=>{
            state.items = action.payload;
            state.itemId = action.payload.map(item=>item.productId)
        }
    }
});


export const {addItem, removeItem, clearCart, updateCart} = cartSlice.actions;
export default cartSlice.reducer;