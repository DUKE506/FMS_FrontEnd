import { createAdminProps } from "@/types/administrator/adminstrator";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { submitAdmin } from "./adminAction";
import { GroupDto } from "@/types/group/group";




const initialState: createAdminProps = {
    account:'',
    password : '',
    name : '',
    email : '',
    phone : '',
    job : '',
    group : 0,
    place : [],
}

const adminSlice = createSlice({
    name : 'admin',
    initialState,
    reducers : {
        updateField: (
            state, 
            action:PayloadAction<{name:string, value : string | number | GroupDto}>
        )=>{
            const {name, value} = action.payload;
            return {...state, [name] : value};
        },
        updatePlace: (state, action:PayloadAction<number[]>)=>{
            return {...state, place : action.payload};
        },
        resetForm: () => initialState,
    },
    extraReducers:(builder) =>{
        builder
        .addCase(submitAdmin.pending,(state)=>{
            //로딩
        })
        .addCase(submitAdmin.fulfilled,(state, action)=>{
            
        })
    }
})


export const { updateField,updatePlace,resetForm } = adminSlice.actions;
export default adminSlice.reducer;