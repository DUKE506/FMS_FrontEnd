import { CreateGroupDto, GroupDto } from "@/types/group/group";
import { ApiResponse, get, patch, post } from "..";






/**
 * 그룹 생성
 * @param createGroup 
 * @returns 
 */
export const createGroup = async (createGroup: CreateGroupDto): Promise<ApiResponse<CreateGroupDto>>  => {
    return await post("group",createGroup);
}

/**
 * GET 그룹 전체 조회
 * @returns 
 */
export const findAllGroup = async (): Promise<ApiResponse<GroupDto[]>>  => {
    return await get('group');
}

/**
 * patch 그룹명 수정
 * @param group 
 * @returns 
 */
export const updateGroup = async(group : GroupDto) => {
    return patch('group',group);
}