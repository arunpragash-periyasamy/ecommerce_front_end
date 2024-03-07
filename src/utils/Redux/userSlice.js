import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        userName: localStorage.getItem('userName'),
        token: localStorage.getItem('token')
    },
    reducers:{
        setUser:(state, action)=>{
            state.userName = action.payload.userName;
            state.token = action.payload.token;
            localStorage.setItem('userName', action.payload.userName);
            localStorage.setItem('token', action.payload.token);
        },
        removeUser:(state)=>{
            localStorage.clear();
            state.token = null;
            state.userName = null;
        }
    }
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;