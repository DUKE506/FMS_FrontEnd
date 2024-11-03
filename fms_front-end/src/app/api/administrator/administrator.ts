import { Admin, AdminPlaceList, createAdminProps, ListAdminProps } from "@/types/administrator/adminstrator";
import { ApiResponse, get, patch, post } from "..";




/**
 * 사업장 생성 api
 * --
 * @param createAdmin 
 * @returns 
 */
export const createAdmin = async (createAdmin: createAdminProps): Promise<ApiResponse<createAdminProps>> => {
    return await post('/auth/create/admin', createAdmin);
}

/**
 * 관리자 사업장 전체 조회
 * --
 * @returns 
 */
export const findAllAdminList = async (): Promise<ApiResponse<ListAdminProps[]>> => {
    return await get('/auth/admin');
}

/**
 * 관리자 상세 조회
 * --
 * @param id 
 * @returns 
 */
export const findOneAdmin = async (id: number): Promise<ApiResponse<Admin>> => {
    return await get(`/auth/admin/${id}`)
}

/**
 * 관리자 사업장 조회
 * --
 * @param id 
 * @returns 
 */
export const findAdminPlace = async (id: number): Promise<ApiResponse<AdminPlaceList[]>> => {
    return await get(`/admin-place/${id}`)
}

/**
 * 관리자 정보 업데이트
 * @param id 
 * @param updateAdminDto 
 * @returns 
 */
export const updateAdmin = async (updateAdminDto: Admin): Promise<ApiResponse<Admin>> => {
    return await patch(`/auth/admin/${updateAdminDto.id}`, updateAdminDto);
}

/**
 * 관리자 사업장 업데이트
 * @param id 
 * @param updateAdminPlaceDto 
 * @returns 
 */
export const updateAdminPlace = async (id: number, updateAdminPlaceDto: AdminPlaceList[]): Promise<ApiResponse<AdminPlaceList[]>> => {
    return await patch(`/admin-place/${id}`, updateAdminPlaceDto);
}

