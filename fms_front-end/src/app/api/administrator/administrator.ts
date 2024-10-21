import { createAdminProps, ListAdminProps } from "@/types/administrator/adminstrator";
import { ApiResponse, get, post } from "..";




/**
 * 사업장 생성 api
 * --
 * @param createAdmin 
 * @returns 
 */
export const createAdmin = async (createAdmin: createAdminProps): Promise<ApiResponse<createAdminProps>> => {
    return await post('/auth/create/admin', createAdmin);
}

export const findAllAdminList = async ():Promise<ApiResponse<ListAdminProps[]>> =>{
    return await get('/auth/admin');
}