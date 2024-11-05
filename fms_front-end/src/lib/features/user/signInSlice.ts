import { SignInDto } from "@/types/sign/sign";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState:SignInDto = {
    account : '',
    password : '',
    mode : false,
}


const signInSlice = createSlice({
    name : 'signin',
    initialState,
    reducers:{
        updateSigninField:(state, action:PayloadAction<({name:string, value:string|boolean})>)=>{
            const {name, value} = action.payload;
            return {...state, [name]:value};
        }
    }
})

export const {updateSigninField} = signInSlice.actions;
export default signInSlice.reducer;