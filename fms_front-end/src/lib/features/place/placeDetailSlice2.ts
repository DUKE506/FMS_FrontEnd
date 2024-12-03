import { DetailPlaceInfoProps, DetailPlacePermProps, PlaceAdminProps } from "@/types/place/place.type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDetailPlaceInfoAction, getDetailPlacePermAction, getPlaceAdminAction } from "./placeActions";


interface detailProps{
    infoData : DetailPlaceInfoProps;
    permData : DetailPlacePermProps;
    adminData : PlaceAdminProps[];
}


const initialState:detailProps ={
    infoData : {} as DetailPlaceInfoProps,
    permData : {} as DetailPlacePermProps,
    adminData : [],
}


const detailPlaceSlice = createSlice({
    name: 'detailPlace',
    initialState,
    reducers:{
        infoUpdate : (state,action:PayloadAction<{name:string,value:string | number | Date}>)=>{
            const {name, value} = action.payload;
            state.infoData = {
                ...state.infoData,
                [name] : value,
            }
        },
        permUpdate : (state,action:PayloadAction<{name:string, value : boolean}>)=>{
            const {name, value} = action.payload;
            state.permData = { 
                ...state.permData,
                [name] : value
            }
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(getDetailPlaceInfoAction.fulfilled, (state,action)=>{
            state.infoData = action.payload
        })
        .addCase(getDetailPlacePermAction.fulfilled, (state,action)=>{
            state.permData = action.payload
        })
        .addCase(getPlaceAdminAction.fulfilled, (state,action)=>{
            state.adminData = action.payload;
        })
    },
})

export const {infoUpdate, permUpdate} = detailPlaceSlice.actions;
export default detailPlaceSlice.reducer;