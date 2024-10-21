import { ListAdminProps } from "@/types/administrator/adminstrator"
import { createSlice } from "@reduxjs/toolkit";
import { getAllAdminList } from "./adminAction";


interface ListProps {
    data : ListAdminProps[];
    loading : boolean;
    error : string | null;
}

const initialState : ListProps = {
    data : [],
    loading : false,
    error : null,
}


const ListAdminSlice = createSlice({
    name : 'listadmin',
    initialState,
    reducers :{
    },
    extraReducers : (builder) =>{
        builder
        .addCase(getAllAdminList.pending, (state)=>{
            state.loading  = true;
            state.error = null;
        })
        .addCase(getAllAdminList.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload as ListAdminProps[];
        })
        .addCase(getAllAdminList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;

        })
    }
})





export default ListAdminSlice.reducer;