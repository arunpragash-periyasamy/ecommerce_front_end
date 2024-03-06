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
        },
        removeUser:(state)=>{
            localStorage.removeItem('userName');
            localStorage.removeItem('token');
            state.token = null;
            state.userName = null;
        }
    }
});

