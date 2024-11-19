import { createGroup, findAllGroup, updateGroup } from "@/app/api/group/group";
import { CreateGroupDto, GroupDto } from "@/types/group/group";
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

export const updateGroupAction = createAsyncThunk(
    'group/update',
    async(updateGroupDto:GroupDto,{dispatch})=>{
        try{
            const res = await updateGroup(updateGroupDto);
            await dispatch(getGroupAction());
            return res.data;
        }catch(err){
            throw err;
        }
    }
)