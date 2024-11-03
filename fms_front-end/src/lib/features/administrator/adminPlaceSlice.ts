import { AdminPlaceList } from "@/types/administrator/adminstrator";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAdminPlace, patchAdminPlace } from "./adminAction";




interface adminPlaceSliceProps {
    data: AdminPlaceList[],
    loading: boolean,
    error: string | null,
}


const initialState: adminPlaceSliceProps = {
    data: [] as AdminPlaceList[],
    loading: false,
    error: null,
}


const adminPlaceSlice = createSlice({
    name: 'adminPlaceInfo',
    initialState,
    reducers: {
        updatePlace: (state, action: PayloadAction<AdminPlaceList[]>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdminPlace.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAdminPlace.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(getAdminPlace.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(patchAdminPlace.fulfilled, (state, action) => {

            })
    }
})

export const { updatePlace } = adminPlaceSlice.actions;
export default adminPlaceSlice.reducer;