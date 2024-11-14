import { CreateGroupDto } from "@/types/group/group";
import { ApiResponse, post } from "..";






/**
 * 그룹 생성
 * @param createGroup 
 * @returns 
 */
export const createGroup = async (createGroup: CreateGroupDto): Promise<ApiResponse<CreateGroupDto>>  => {
    return await post("group",createGroup);
}