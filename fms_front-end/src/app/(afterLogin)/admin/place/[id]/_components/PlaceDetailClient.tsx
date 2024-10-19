'use client'

import { useDispatch, useSelector } from "react-redux";
import DetailForm from "./DetailForm/DetailForm";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { editPlace, findOnePlaceAction } from "@/lib/features/place/placeActions";
import Button from "@/components/Button/Button";
import Styles from './PlaceDetailClient.module.css'

//서버에서 데이터 조회
interface PlaceDetailClient {
    placeid: number;
}

const PlaceDetailClient = ({ placeid }: PlaceDetailClient) => {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const place = useSelector((state: RootState) => state.placeDetail.data.info);

    useEffect(() => {
        dispatch(findOnePlaceAction(placeid));
    }, [dispatch, placeid])

    //수정모드
    const handleEdit = () => {
        setEdit(!edit);
    }

    /**
     * 수정 
     */
    const onUpdate = async() => {
        await dispatch(editPlace(place.data));
        dispatch(findOnePlaceAction(placeid));
        handleEdit();
    }

    return (
        <>
            <DetailForm place={place} edit={edit} />
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