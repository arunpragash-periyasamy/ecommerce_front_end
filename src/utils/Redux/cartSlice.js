import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: JSON.parse(localStorage.getItem('cart')) || [],
        itemId: JSON.parse(localStorage.getItem('itemId')) || []
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
            localStorage.setItem('cart', JSON.stringify(state.items));
            localStorage.setItem('itemId', JSON.stringify(state.itemId));
        },
        removeItem: (state, action)=>{
            const index = state.items.findIndex(item=>item.productId === action.payload);
            state.items.splice(index, 1);
            state.itemId.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(state.items));
            localStorage.setItem('itemId', JSON.stringify(state.itemId));
        },
        clearCart: (state, action)=>{
            state.items = [];
            state.itemId = [];
        },
        updateCart:(state, action)=>{
            state.items = action.payload;
            localStorage.setItem('cart', JSON.stringify(state.items));
            state.itemId = action.payload.map(item=>item.productId)
            localStorage.setItem('itemId', JSON.stringify(state.itemId));
        }
    }
});


export const {addItem, removeItem, clearCart, updateCart} = cartSlice.actions;
export default cartSlice.reducer;