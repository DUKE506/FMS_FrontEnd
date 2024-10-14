import { createPlace, findAllPlaceTable, findOnePlace, updatePlace } from "@/app/api/place/place"
import { CreatePlaceProps, DetailPlaceProps, PlaceTableProps } from "@/types/place/place.type"
import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

/**
 *  사업장 생성 액션
 * --
 */
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

/**
 * 사업장 수정 액션
 * --
 */
export const editPlace = createAsyncThunk(
    'place/update',
    async(placeData : DetailPlaceProps, thunkAPI) => {
        try{
            const res = await updatePlace(placeData);
            console.log(res);
            return res;
        }catch(err){
            console.log(err)
        }
    }
)


/**
 * 사업장 전체 조회 액션
 * --
 */
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

/**
 * 날짜 포맷 변환
 * --
 */
export const convertDates = createAsyncThunk(
    'place/convertDates',
    async (_, { getState }) => {
        const { placeTable } = getState() as { placeTable: { data: PlaceTableProps[] } };
        return placeTable.data.map(item => (
            {
                ...item,
                contractedAt: item.contractedAt
                    ? moment(item.contractedAt).format('YYYY-MM-DD')
                    : null
            }));


    }
)

/**
 * 사업장 단일 조회 // 추후 -> 권한, 사업장 매니저 전체 조회
 */
export const findOnePlaceAction = createAsyncThunk(
    '/place/detail/get',
    async (placeid: number) => {
        try {
            const res = await findOnePlace(placeid);
            return res.data
        } catch (err) {
            console.log(err)
        }
    }
)