import { createGroup, findAllGroup } from "@/app/api/group/group";
import { CreateGroupDto } from "@/types/group/group";
import { createAsyncThunk } from "@reduxjs/toolkit";






export const getGroupAction = createAsyncThunk(
    'group/findAll',
    async() => {
        try{
            const res = await findAllGroup();
            return res.data;
        }catch(err){
            throw err;
        }
    }
)

export const createGroupAction = createAsyncThunk(
    'group/create',
    async(createGroupDto : CreateGroupDto,{dispatch}) => {
        try{
            const res = await createGroup(createGroupDto)
            await dispatch(getGroupAction());
            return res.data;
        }catch(err){
            throw err;
        }
    }
)