import { get } from ".."



export const findAllPlaceTable = async () => {
    return await get('/place/table');
}