'use client'

import { useDispatch, useSelector } from "react-redux";
import DetailForm from "./DetailForm/DetailForm";
import { AppDispatch, RootState } from "@/lib/store";
import { useCallback, useEffect, useState } from "react";
import { editPlace, findOnePlaceAction, getPlaceAdminAction } from "@/lib/features/place/placeActions";
import Button from "@/components/Button/Button";
import Styles from './PlaceDetailClient.module.css'
import Perm from "../../_components/Perm/Perm";
import { ManagerTable } from "../../add/_components/ManagerTable/ManagerTable";
import { ListAdminProps } from "@/types/administrator/adminstrator";
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";

//서버에서 데이터 조회
interface PlaceDetailClient {
    placeid: number;
}

const PlaceDetailClient = ({ placeid }: PlaceDetailClient) => {
    const [edit, setEdit] = useState(false);
    const [placeAdmin, setPlaceAdmin] = useState<ListAdminProps[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const place = useSelector((state: RootState) => state.placeDetail);
    const placeAdmins = useSelector((state:RootState)=> state.placeAdmin)


    const getPlaceDetail = useCallback(() => {
        dispatch(findOnePlaceAction(placeid));
    }, [])

    useEffect(()=>{
        dispatch(getPlaceAdminAction(placeid))
        const convert = placeAdmins.data.map(admin => ({
            id : admin.placeAdminId,
            account : admin.account || '',
            name: admin.name,
            email: admin.email,
            phone: admin.phone,
            job: admin.job,
            group: admin.group,
            state : null,
        }))
        console.log('gsgs',placeAdmins.data)
        setPlaceAdmin(convert)
        
    },[dispatch])


    useEffect(() => {
        getPlaceDetail();
    }, [edit])


    //수정모드
    const handleEdit = () => {
        setEdit(prev => !prev);
    }

    /**
     * 수정 
     */
    const onUpdate = async () => {
        console.log(place.data.addr)
        await dispatch(editPlace(place.data));
        // dispatch(findOnePlaceAction(placeid));
        handleEdit();
    }

    return (
        <>
            <DetailForm placeid={placeid} place={place} edit={edit} />
            <Perm placeid={placeid} place={place.data} edit={edit} mode="update" />
            <BaseContainer
            header={
                <BaseHeader title="관리자"/>
            }
            >
                <ManagerTable members={placeAdmin} />
            </BaseContainer>
            
            <div className={Styles.btn_area}>
                {
                    edit ?
                        <>
                            <Button label="저장" onClick={onUpdate} />
                            <Button label="취소" onClick={handleEdit} />
                        </>
                        :
                        <Button label="편집" onClick={handleEdit} />
                }
            </div>

        </>
    )
}

export default PlaceDetailClient;