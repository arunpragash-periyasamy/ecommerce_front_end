import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: ['burger', 'pizza']
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            state.items.pop();
        },
        clearCart: (state, action)=>{
            state.items = [];
        }
    }
});


export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;