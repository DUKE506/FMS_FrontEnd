
import reducer from "../place/placeSlice";
import { createSlice } from "@reduxjs/toolkit";
import { getGroupAction } from "./groupAction";
import { GroupDto } from "@/types/group/group";







interface GroupSliceProps {
    data : GroupDto[];
    loading : boolean;
    error : string | null
}

const initialState :GroupSliceProps ={
    data : [] as GroupDto[],
    loading : false,
    error : null,
}

const groupSlice = createSlice({
    name : 'group',
    initialState,
    reducers : {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(
            getGroupAction.pending, (state) => {
                state.loading = true;
                state.error = null;
        })
        .addCase(
            getGroupAction.fulfilled, (state,action) => {
                state.data =action.payload
                state.loading = false;
                
        })
        .addCase(
            getGroupAction.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload as string;
        })
        
    }
})


export default groupSlice.reducer;