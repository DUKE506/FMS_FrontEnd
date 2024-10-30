'use client'
import { useDispatch, useSelector } from "react-redux"
import { FormContainer } from "./_components/Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { useEffect, useState } from "react"
import { getAdminDetail } from "@/lib/features/administrator/adminAction"
import { TransferItem, TransferListContainer } from "@/app/(afterLogin)/_components/TransferLists/TransferList"
import { ConverterTransferList } from "@/utills/transformers"
import { getAllPlaceListAction } from "@/lib/features/place/placeActions"




export const AdminDetailClient = ({id} : {id:number}) => {
    const dispatch = useDispatch<AppDispatch>();
    const place = useSelector((state:RootState) => state.placeList)
    const detailAdmin = useSelector((state:RootState) => state.adminDetail)
    //Tarnsfer컴포넌트 state
    const [selectPlace, setSelectPlace] = useState<TransferItem[]>([]);
    const [transferData, setTransferData] = useState<TransferItem[]>([]);
    
    // 관리자 상세 조회
    useEffect(()=>{
        dispatch(getAdminDetail(id))
        dispatch(getAllPlaceListAction())
    },[dispatch])

    //컴포넌트 데이터로 타입 변환
    useEffect(()=>{
        if (place.data.length > 0) {
            const selectConverted = ConverterTransferList(detailAdmin.data.places);
            let converted = ConverterTransferList(place.data);
            
            setSelectPlace(selectConverted);        
            converted = converted.filter(place => !selectConverted.some((selectPlace) => selectPlace.id === place.id));
            setTransferData(converted);
        }
    },[detailAdmin.data.places, place.data])

    return (
        <>
            <FormContainer data={detailAdmin.data}/>
            <TransferListContainer
                    datas={transferData}
                    selectDatas={selectPlace}
                    title="사업장"
                    setState={setSelectPlace}
                    edit={true}
                />
        </>     
    )
}

