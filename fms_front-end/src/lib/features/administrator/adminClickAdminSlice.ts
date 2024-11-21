import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface ClickUserState {
    user : number;
}

const initialState:ClickUserState = {
    user : 0,
}



const ClickUserSlice = createSlice({
    name : 'userClick',
    initialState,
    reducers : {
        clickUser:(state, action:PayloadAction<number>)=>{
            state.user = action.payload
        }
    },
})

export const {clickUser} = ClickUserSlice.actions
export default ClickUserSlice.reducer;