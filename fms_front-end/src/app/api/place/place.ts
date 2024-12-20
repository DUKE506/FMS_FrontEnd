
import { CreatePlaceProps, DetailPlaceInfoProps, DetailPlacePermProps, DetailPlaceProps, PlaceAdminProps, PlaceListProps, PlaceTableProps } from "@/types/place/place.type";
import { ApiResponse, get, patch, post } from ".."
import { User } from "@/lib/features/auth/authSlice";
import { ListAdminProps } from "@/types/administrator/adminstrator";


/**
 * 사업장 전체 데이터 조회(테이블 형태)
 * --
 * @returns 
 */
export const findAllPlaceTable = async (): Promise<ApiResponse<PlaceTableProps[]>> => {
    return await get('/place/table');
}

/**
 * 사업장 생성 api
 * --
 * @param createPlace 
 * @returns 
 */
export const createPlace = async (createPlace: CreatePlaceProps): Promise<ApiResponse<CreatePlaceProps>> => {
    return await post('/place', createPlace);
}

/**
 * 사업장 단일 조회 api
 * @param id 
 * @returns 
 */
export const findOnePlace = async (id: number): Promise<ApiResponse<DetailPlaceProps>> => {
    return await get(`place/${id}`);
}

/**
 * 사업장 수정(정보 + 권한)
 * @param updatePlace 
 * @returns 
 */
export const updatePlace = async(updatePlace : DetailPlaceProps):Promise<ApiResponse<DetailPlaceProps>> =>{
    return await patch(`place/${updatePlace.id}`, updatePlace);
}

/**
 * 사업장 전체 조회
 * @returns 
 */
export const findAllPlaceList = async ():Promise<ApiResponse<PlaceListProps[]>> =>{
    return await get('/place/list');
}

/**z
 * 사업장 담당 관리자 목록 조회
 * @param placeid 
 * @returns 
 */
export const findPlaceAdmin = async(placeid : number):Promise<ApiResponse<PlaceAdminProps[]>>=>{
    return await get(`/admin-place/place/${placeid}`)
}

/**
 * 사업장 정보 조회 (INFO ONLY)
 * @param placeid 
 * @returns 
 */
export const findDetailPlaceInfo = async(placeid : number):Promise<ApiResponse<DetailPlaceInfoProps>>=>{
    return await get(`/place/placeinfo/${placeid}`)
}

/**
 * 사업장 권한 조회 (PERM ONLY)
 * @param placeid 
 * @returns 
 */
export const findDetailPlacePerm = async(placeid : number):Promise<ApiResponse<DetailPlacePermProps>>=>{
    return await get(`/place/placeperm/${placeid}`)
}

/**
 * 사업장 정보 수정 (INFO ONLY)
 * @param placeid 
 * @param placeInfo 
 * @returns 
 */
export const updatePlaceInfo = async(placeid :number, placeInfo : DetailPlaceInfoProps):Promise<ApiResponse<boolean>>=>{
    return await patch(`/place/placeinfo/${placeid}`, placeInfo);
}

/**
 * 사업장 권한 수정 (PERM ONLY)
 * @param placeid 
 * @param placePerm 
 * @returns 
 */
export const updatePlacePerm = async(placeid : number, placePerm : DetailPlacePermProps):Promise<ApiResponse<boolean>>=>{
    return await patch(`/place/placePerm/${placeid}`, placePerm);
}

/**
 * 사업장 관리자 삭제
 * @param placeId 
 * @param admins 
 * @returns 
 */
export const deletePlaceAdmin = async(placeId : number, admins : ListAdminProps[]):Promise<ApiResponse<boolean>> => {
    return await patch(`admin-place/place/delete/${placeId}`, admins);
}

/**
 * 사업장 관리자 추가
 * @param placeId 
 * @param admins 
 * @returns 
 */
export const createPlaceAdmin = async(placeId: number, admins : ListAdminProps[]):Promise<ApiResponse<boolean>> => {
    return await post(`admin-place/place/create/${placeId}`, admins);
}