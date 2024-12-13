import { createPlace, createPlaceAdmin, deletePlaceAdmin, findAllPlaceList, findAllPlaceTable, findDetailPlaceInfo, findDetailPlacePerm, findOnePlace, findPlaceAdmin, updatePlace, updatePlaceInfo, updatePlacePerm } from "@/app/api/place/place"
import { Admin, ListAdminProps } from "@/types/administrator/adminstrator";
import { CreatePlaceProps, DetailPlaceInfoProps, DetailPlacePermProps, DetailPlaceProps, PlaceTableProps } from "@/types/place/place.type"
import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

/**
 *  사업장 생성 액션
 * --
 */
export const submitPlace = createAsyncThunk(
    'place/submit',
    async (placeData: CreatePlaceProps, {dispatch}) => {
        try {
            const res = await createPlace(placeData);
            dispatch(getAllPlaceListAction());
            return res;
        } catch (err) {
            console.log(err);
            return err
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
 * 사업장 전체 조회 액션(테이블 형태)
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

/**
 * 사업장 전체 조회 (리스트)
 */
export const getAllPlaceListAction = createAsyncThunk(
    'place/get/table',
    async (thunkAPI) => {
        try{
            const res = await findAllPlaceList();
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

/**
 * 사업장 담당 관리자 조회
 */
export const getPlaceAdminAction = createAsyncThunk(
    'place/placeadmin',
    async(placeid : number)=>{
        try{
            const res = await findPlaceAdmin(placeid);
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

/**
 * 사업장 정보 조회 (INFO ONLY)
 * --
 */
export const getDetailPlaceInfoAction = createAsyncThunk(
    'place/placeinfo',
    async(placeid: number)=>{
        try{
            const res = await findDetailPlaceInfo(placeid);
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

/**
 * 사업장 권한 조회 (Perm ONLY)
 * --
 */
export const getDetailPlacePermAction =createAsyncThunk(
    'place/placeperm',
    async(placeid: number)=>{
        try{
            const res = await findDetailPlacePerm(placeid);
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

/**
 * 사업장 정보 수정 (INFO ONLY)
 * --
 */
export const updatePlaceInfoAction = createAsyncThunk(
    'place/placeinfo/update',
    async({placeid, placeinfo}:{placeid:number; placeinfo:DetailPlaceInfoProps},{dispatch}) => {
        try{
            const res = await updatePlaceInfo(placeid,placeinfo);

            dispatch(getDetailPlaceInfoAction(placeid));
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

/**
 * 사업장 권한 수정 (PERM ONLY)
 * --
 */
export const updatePlacePermAction = createAsyncThunk(
    'place/placeperm/update',
    async({placeid, placeperm}:{placeid:number; placeperm:DetailPlacePermProps},{dispatch}) => {
        try{
            const res = await updatePlacePerm(placeid,placeperm);

            dispatch(getDetailPlacePermAction(placeid));
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

/**
 * 사업장 관리자 추가
 * --
 */
export const addPlaceAdminAction = createAsyncThunk(
    'place/placeadmin/create',
    async({placeId, admins} : {placeId:number; admins:ListAdminProps[]}, {dispatch})=>{
        try{
            const res = await createPlaceAdmin(placeId,admins);
            dispatch(getPlaceAdminAction(placeId));
            return res.data
        }catch(err){
            throw err;
        }
    }
)

/**
 * 사업장 관리자 삭제
 * --
 */
export const deletePlaceAdminAction = createAsyncThunk(
    'place/placeadmin/delete',
    async({placeId, placeAdmin}:{placeId:number; placeAdmin:ListAdminProps[]}, {dispatch})=>{
        try{
            const res = await deletePlaceAdmin(placeId,placeAdmin);
            dispatch(getPlaceAdminAction(placeId));
            return res.data
        }catch(err){
            throw err;
        }
    }
)