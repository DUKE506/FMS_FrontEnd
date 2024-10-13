import { DetailPlaceProps } from "@/types/place/place.type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findOnePlaceAction } from "./placeActions";
import { error } from "console";


//사업장 정보 //추루 권한 매니저 까지 추가예정
export interface placeInfoProps {
    data: DetailPlaceProps;
    loading: boolean;
    error: string | null;
}


const initialState: { data: { info: placeInfoProps; perm: any; manager: any[]; } } = {
    data: {
        info: { data: {} as DetailPlaceProps, loading: false, error: null },
        perm: {},
        manager: []
    }
}



const PlaceDetailSlice = createSlice({
    name: 'placeDetail',
    initialState,
    reducers: {
        updatePlaceInfo:(state, action : PayloadAction<{name:string; value:string|Date}>)=>{
            const {name, value} = action.payload;
            console.log(name,value)
            state.data.info.data = {
                ...state.data.info.data,
                [name]:value
            };
        }
    },
    extraReducers: (bulider) => {
        bulider
            .addCase(findOnePlaceAction.pending, (state) => {
                state.data.info.loading = true;
            })
            .addCase(findOnePlaceAction.fulfilled, (state, action) => {
                state.data.info.loading = false;
                state.data.info.data = action.payload as DetailPlaceProps;
            })
            .addCase(findOnePlaceAction.rejected, (state, action) => {
                state.data.info.loading = false;
                state.data.info.error = action.payload as string;
            })
    }
})
export const { updatePlaceInfo } = PlaceDetailSlice.actions;
export default PlaceDetailSlice.reducer;