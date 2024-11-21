import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "./authAction";

export interface User {
    id : number;
    account : string;
    name: string;
    role? : 'user' | 'admin'
    email : string;
    phone : string;

}

interface UserAuthProps {
    user : User | null;
    isAuthenticated : boolean;
    loading : boolean;
    error : string | null
}

const initialState:UserAuthProps ={
    user : null,
    isAuthenticated : false,
    loading : false,
    error : null
}



const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        //로그아웃
    },
    extraReducers:(builder) =>{
        builder
        .addCase(loginAction.pending, (state)=>{
            state.loading = true
        })
        .addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false,
            state.isAuthenticated =true,
            state.user = action.payload?.user ?? null
        })
        .addCase(loginAction.rejected,(state,action)=>{
            state.loading=false,
            state.isAuthenticated=false,
            state.user = null
        })
    }
})


export default AuthSlice.reducer;