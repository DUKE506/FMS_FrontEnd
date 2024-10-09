
import { CreatePlaceProps, PlaceTableProps } from "@/types/place/place.type";
import { ApiResponse, get, post } from ".."



export const findAllPlaceTable = async (): Promise<ApiResponse<PlaceTableProps[]>> => {
    return await get('/place/table');
}

export const createPlace = async (createPlace: CreatePlaceProps): Promise<ApiResponse<CreatePlaceProps>> => {
    return await post('/place', createPlace);
}