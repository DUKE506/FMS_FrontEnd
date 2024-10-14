
import { CreatePlaceProps, DetailPlaceProps, PlaceTableProps } from "@/types/place/place.type";
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

export const updatePlace = async(updatePlace : DetailPlaceProps):Promise<ApiResponse<DetailPlaceProps>> =>{
    return await patch(`place/${updatePlace.id}`, updatePlace);
}