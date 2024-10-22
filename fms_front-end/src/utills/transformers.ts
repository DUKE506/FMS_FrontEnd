import { TransferItem } from "@/app/(afterLogin)/admin/administrator/add/_components/TransferLists/TransferList";
import { PlaceListProps } from "@/types/place/place.type";



export const ConverterTransferList = (data : PlaceListProps[]):TransferItem[] => {
    const transferItems : TransferItem[] = [];
    console.log('유틸 :'+ data.length)

    data.map((value, idx) => {
        transferItems.push({
            id : value.id,
            name : value.name,
            subName : value.contractNum,
        })
    })
    return transferItems;
}