import { Admin, AdminPlaceList, createAdminProps } from "@/types/administrator/adminstrator";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAdmin, findAdminPlace, findAllAdminList, findAvgAdminPlace, findOneAdmin, updateAdmin, updateAdminPlace } from "@/app/api/administrator/administrator"




/**
 * 관리자 생성 액션
 * --
 */
export const submitAdmin = createAsyncThunk(
    'administrator/submit',
    async (createAdminDto: createAdminProps) => {
        try {
            const res = await createAdmin(createAdminDto);
            return res;
        } catch (err) {
            console.log(err)
        }
    }
)

export const getAllAdminList = createAsyncThunk(
    'administrator/findAllList',
    async () => {
        try {
            const res = await findAllAdminList();
            return res.data;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
)

/**
 * 관리자 정보 상세 조회
 * --
 */
export const getAdminDetail = createAsyncThunk(
    'admin/detail',
    async (id: number) => {
        try {
            const res = await findOneAdmin(id);
            return res.data;
        } catch (err) {
            throw err
        }

    }
)

/**
 * 관리자 사업장 조회
 */
export const getAdminPlace = createAsyncThunk(
    'admin/adminplace',
    async (id: number) => {
        try {
            const res = await findAdminPlace(id);
            return res.data;
        } catch (err) {
            throw err;
        }
    }
)

/**
 * 관리자 수정
 * --
 */
export const patchAdmin = createAsyncThunk(
    'admin/update',
    async (updateAdminDto: Admin,{dispatch}) => {
        try {
            const res = await updateAdmin(updateAdminDto)
            dispatch(getAdminDetail(updateAdminDto.id))
            return res.data;
        } catch (err) {
            throw err;
        }
    }
)

/**
 * 관리자 사업장 수정
 * --
 */
export const patchAdminPlace = createAsyncThunk(
    'admin/adminplace/update',
    async ({ id, updateAdminPlaceDto }: { id: number; updateAdminPlaceDto: AdminPlaceList[] }) => {
        try {
            const res = await updateAdminPlace(id, updateAdminPlaceDto);
            return res.data;
        } catch (err) {
            throw err
        }
    }
)

export const getAvgAdminPlace = createAsyncThunk(
    'admin/adminplace/avg',
    async()=>{
        try{
            const res = await findAvgAdminPlace();
            return res.data;
        }catch(err){
            throw err;
        }
    }
)