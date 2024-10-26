import { findOneAdmin } from "@/app/api/administrator/administrator";
import { DetailAdminProps } from "@/types/administrator/adminstrator";
import { createSlice } from "@reduxjs/toolkit";
import { getAdminDetail } from "./adminAction";



interface adminDetailProps {
    data: DetailAdminProps;
    loading: boolean;
    error: string | null;
}

const initialState: adminDetailProps = {
    data: {} as DetailAdminProps,
    loading: false,
    error: null,
}



const adminDetailSlice = createSlice({
    name : 'adminDetail',
    initialState,
    reducers : {

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAdminDetail.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getAdminDetail.fulfilled, (state, action) => {
            state.data = action.payload as DetailAdminProps;
            state.loading = false;
            state.error = null;
        })
        .addCase(getAdminDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})


export default adminDetailSlice.reducer;