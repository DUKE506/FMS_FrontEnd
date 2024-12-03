
import { CreatePlaceProps, DetailPlaceInfoProps, DetailPlacePermProps, DetailPlaceProps, PlaceAdminProps, PlaceListProps, PlaceTableProps } from "@/types/place/place.type";
import { ApiResponse, get, patch, post } from ".."


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
