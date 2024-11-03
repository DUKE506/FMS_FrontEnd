import { TransferItem } from "@/app/(afterLogin)/_components/TransferLists/TransferList";
import { AdminPlaceList } from "@/types/administrator/adminstrator";
import { PlaceListProps } from "@/types/place/place.type";




export const ConverterTransferList = (data: PlaceListProps[] | AdminPlaceList[]): TransferItem[] => {
    const transferItems: TransferItem[] = [];

    data?.map((value, idx) => {
        transferItems.push({
            id: value.id,
            name: value.name,
            subName: value.contractNum,
        })
    })
    return transferItems;
}

export const TransferListToAdminPlaceList = (data: TransferItem[]): AdminPlaceList[] => {
    const adminPlaces: AdminPlaceList[] = [];

    data.map((item) => {
        adminPlaces.push({
            id: item.id,
            name: item.name,
            contractNum: item.subName ?? '',
        })
    })

    return adminPlaces;
}
