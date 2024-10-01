
import { PlaceTableProps } from "@/app/types/place/place.type";
import { ApiResponse, get } from ".."



export const findAllPlaceTable = async (): Promise<ApiResponse<PlaceTableProps[]>> => {
    return await get('/place/table');
}