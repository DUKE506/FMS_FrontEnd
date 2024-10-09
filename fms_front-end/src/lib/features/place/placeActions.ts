import { createPlace, findAllPlaceTable } from "@/app/api/place/place"
import { CreatePlaceProps } from "@/types/place/place.type"
import { createAsyncThunk } from "@reduxjs/toolkit";



export const submitPlace = createAsyncThunk(
    'place/submit',
    async (placeData: CreatePlaceProps, thunkAPI) => {
        try {
            const res = await createPlace(placeData);
            return res;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue("CREATE FAILED")
        }
    }
)

export const getAllPlaceTableData = createAsyncThunk(
    '/place/get',
    async () => {
        try {
            const res = await findAllPlaceTable();
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
)