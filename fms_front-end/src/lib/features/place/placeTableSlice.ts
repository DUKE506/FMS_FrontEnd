import { PlaceTableProps } from "@/types/place/place.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertDates, getAllPlaceTableData } from "./placeActions";



interface TableState {
    data: PlaceTableProps[];
    loading: boolean,
    error: string | null,
}

const initialState: TableState = {
    data: [],
    loading: false,
    error: null,
}

const placeTableSlice = createSlice({
    name: 'placeTable',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPlaceTableData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllPlaceTableData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload as PlaceTableProps[];
            })
            .addCase(getAllPlaceTableData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;

            })
            .addCase(convertDates.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload as PlaceTableProps[];
            })
    },

})


export default placeTableSlice.reducer;

