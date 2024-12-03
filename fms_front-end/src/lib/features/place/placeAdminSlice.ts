import { PlaceAdminProps } from "@/types/place/place.type"
import { createSlice } from "@reduxjs/toolkit";
import { getPlaceAdminAction } from "./placeActions";



interface placeAdminState {
    data: PlaceAdminProps[];
    loading: boolean;
    error: string | null;
}

const initialState: placeAdminState = {
    data: [],
    loading: false,
    error: null
}


const PlaceAdminSlice = createSlice({
    name: 'placeAdmin',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlaceAdminAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPlaceAdminAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPlaceAdminAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})


export default PlaceAdminSlice.reducer;