'use client'
import { useDispatch, useSelector } from "react-redux"
import { FormContainer } from "./_components/Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { useEffect, useState } from "react"
import { getAdminDetail, getAdminPlace, patchAdmin, patchAdminPlace } from "@/lib/features/administrator/adminAction"
import { TransferItem, TransferListContainer } from "@/app/(afterLogin)/_components/TransferLists/TransferList"
import { ConverterTransferList, TransferListToAdminPlaceList } from "@/utills/transformers"
import { getAllPlaceListAction } from "@/lib/features/place/placeActions"
import Styles from './page.module.css'
import { updatePlace } from "@/lib/features/administrator/adminPlaceSlice"
import { AdminPlaceList } from "@/types/administrator/adminstrator"
import { Profile } from "../_components/Profile/Profile"
import { getGroupAction } from "@/lib/features/group/groupAction"



export const AdminDetailClient = ({ id }: { id: number }) => {
    const dispatch = useDispatch<AppDispatch>();
    //전체 사업장 조회
    const place = useSelector((state: RootState) => state.placeList)
    //그룹
    const group = useSelector((state:RootState)=> state.groupAll)
    //관리자 정보(개인정보, 관리 사업장 정보)
    const detailAdmin = useSelector((state: RootState) => state.adminDetail)
    const adminPlaces = useSelector((state: RootState) => state.adminPlace)
    //Tarnsfer컴포넌트 state
    const [selectPlace, setSelectPlace] = useState<TransferItem[]>([]);
    const [transferData, setTransferData] = useState<TransferItem[]>([]);
    //회원정보 편집 상태
    const [formEdit, setFormEdit] = useState<boolean>(false);
    //관리자 사업장 편집 상태
    const [placeEdit, setPlaceEdit] = useState<boolean>(false);

    // 관리자 상세 조회
    useEffect(() => {
        dispatch(getAdminDetail(id)) //관리자 단일 조회
        dispatch(getAdminPlace(id)) //관리자 사업장 조회
        dispatch(getGroupAction()); //그룹 전체 조회
        dispatch(getAllPlaceListAction()) //사업장 전체 조회
    }, [])

    useEffect(() => {
        dispatch(getAdminDetail(id))
    }, [formEdit])

    useEffect(() => {
        dispatch(getAdminPlace(id))

    }, [placeEdit])

    //컴포넌트 데이터로 타입 변환
    useEffect(() => {
        if (place.data.length > 0) {
            const selectConverted = ConverterTransferList(adminPlaces.data);
            let converted = ConverterTransferList(place.data);

            setSelectPlace(selectConverted);
            converted = converted.filter(place => !selectConverted.some((selectPlace) => selectPlace.id === place.id));
            setTransferData(converted);
        }
    }, [adminPlaces.data, place.data])

    //사업장 선택 함수
    const handleChangePlace = (select: TransferItem[]) => {
        let selectedPlaces: AdminPlaceList[] = []
        selectedPlaces = TransferListToAdminPlaceList(select);
        dispatch(updatePlace(selectedPlaces));
    }

    //관리자 정보 update
    const handleUpdateForm = async () => {
        console.log('그룹'+detailAdmin.data.group)
        console.log('사용자명'+detailAdmin.data.group)
        await dispatch(patchAdmin(detailAdmin.data))
        setFormEdit(false);
    }

    //관리자 사업장 정보 update
    const handleUpdateList = async () => {
        await dispatch(patchAdminPlace({ id, updateAdminPlaceDto: adminPlaces.data }))
        setPlaceEdit(false);
    }

    return (
        <div className={`${Styles.row} ${Styles.container}`}>
            <div className={Styles.flex1}>
                {
                    <FormContainer
                        data={detailAdmin.data}
                        edit={formEdit}
                        group={group.data}
                        setEdit={setFormEdit}
                        onUpdate={handleUpdateForm}
                    />
                }
            </div>
            <div className={Styles.flex2}>
                <TransferListContainer
                    datas={transferData}
                    selectDatas={selectPlace}
                    title="사업장"
                    setState={handleChangePlace}
                    edit={placeEdit}
                    setEdit={setPlaceEdit}
                    isCreate={false}
                    onUpdate={handleUpdateList}
                />
            </div>
        </div>
    )
}

