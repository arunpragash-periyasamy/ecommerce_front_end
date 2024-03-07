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
            console.log(index);
            if(index !== -1){
                state.items[index].quantity = action.payload.quantity;
            }else{
                state.items.push(action.payload);
                state.itemId.push(action.payload.productId);
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
        },
    }
});


export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;