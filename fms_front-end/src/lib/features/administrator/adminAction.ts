import { createAdminProps } from "@/types/administrator/adminstrator";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAdmin, findAllAdminList, findOneAdmin } from "@/app/api/administrator/administrator"




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