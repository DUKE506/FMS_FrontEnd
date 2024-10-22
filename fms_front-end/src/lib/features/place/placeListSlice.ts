import { PlaceListProps } from "@/types/place/place.type";
import { createSlice } from "@reduxjs/toolkit";
import { getAllPlaceListAction } from "./placeActions";



interface ListSliceProps {
    data : PlaceListProps[];
    loading : boolean;
    error : string | null
}

const initialState:ListSliceProps = {
    data : [],
    loading : false,
    error : null,
}


const PlaceListSlice = createSlice({
    name : 'placeList',
    initialState,
    reducers : {
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getAllPlaceListAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllPlaceListAction.fulfilled, (state, action)=>{
            state.data = action.payload as PlaceListProps[];
            state.loading = false;
        })
        .addCase(getAllPlaceListAction.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export default PlaceListSlice.reducer;