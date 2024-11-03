import { DetailPlaceProps } from "@/types/place/place.type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editPlace, findOnePlaceAction } from "./placeActions";
import { error } from "console";


//사업장 정보 //추루 권한 매니저 까지 추가예정
export interface placeInfoProps {
    data: DetailPlaceProps;
    loading: boolean;
    error: string | null;
}


const initialState: placeInfoProps = {
    data: {} as DetailPlaceProps,
    loading: false,
    error: null,

}



const PlaceDetailSlice = createSlice({
    name: 'placeDetail',
    initialState,
    reducers: {
        updatePlaceDetail: (state, action: PayloadAction<{ name: string; value: string | Date | boolean }>) => {
            const { name, value } = action.payload;
            state.data = {
                ...state.data,
                [name]: value
            };
        }
    },
    extraReducers: (bulider) => {
        bulider
            .addCase(findOnePlaceAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(findOnePlaceAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload as DetailPlaceProps;
            })
            .addCase(findOnePlaceAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(editPlace.fulfilled, (state, action) => {

            })
    }
})
export const { updatePlaceDetail } = PlaceDetailSlice.actions;
export default PlaceDetailSlice.reducer;