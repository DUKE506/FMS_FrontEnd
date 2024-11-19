import { SelectDataProps } from "@/app/(afterLogin)/_components/SelectBox/SelectBox";
import { GroupDto } from "@/types/group/group";




/**
 * select박스 데이터 변환
 * @param data 
 */
export const ConvertSelectData = (data : GroupDto[]) =>{
    const convertData:SelectDataProps[] = Array.from(data)
    return convertData;
}