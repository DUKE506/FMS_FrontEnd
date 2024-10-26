'use client'
import Link from "next/link";
import { FormContainer } from "./_components/Form/Form";
import { TransferItem, TransferListContainer } from "../../../_components/TransferLists/TransferList";
import Styles from './page.module.css'
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button/Button";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { resetForm, updateField, updatePlace } from "@/lib/features/administrator/adminSlice";
import { submitAdmin } from "@/lib/features/administrator/adminAction";
import { getAllPlaceListAction } from "@/lib/features/place/placeActions";
import { ConverterTransferList } from "@/utills/transformers";
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import { RadioBox, RadioBoxDataProps } from "../../../_components/RadioBox/RadioBox";



const permObject: RadioBoxDataProps[] = [
    {
        name: "Master",
        explain: "관리자 페이지에서 읽기 및 쓰기 권한을 가진 사용자",
        value: "Master",
    },
    {
        name: "Manager",
        explain: "관리자 페이지에서 읽기 권한을 가진 사용자",
        value: "Manager",
    },
]


const AdminAddClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const admin = useSelector((state: RootState) => state.admin);
    const place = useSelector((state: RootState) => state.placeList);
    const [transferData, setTransferData] = useState<TransferItem[]>([]);
    // const [selectPlace, setSelectPlace] = useState<TransferItem[]>([]);

    useEffect(() => {
        dispatch(getAllPlaceListAction());
    }, [dispatch]);



    useEffect(() => {
        if (place.data.length > 0) {
            const converted = ConverterTransferList(place.data);
            setTransferData(converted);
        }
    }, [place.data])

    useEffect(() => {
        dispatch(getAllPlaceListAction());
        //언마운트
        return () => {
            dispatch(resetForm());
        }
    }, [])

    //사업장 선택 함수
    const selectPlace = (select: TransferItem[]) => {
        const value: number[] = [];
        select.map((v, i) => {
            value.push(v.id);
        })
        dispatch(updatePlace(value))
    }

    //권한 선택
    const selectPerm = (data: RadioBoxDataProps) => {
        dispatch(updateField({ name: 'job', value: data.value }))
    }

    //관리자 등록
    const submit = async () => {
        await dispatch(submitAdmin(admin));
    }
    return (
        <div className={Styles.col}>
            <FormContainer createAdmin={admin} />
            <div className={Styles.row}>
                <TransferListContainer
                    datas={transferData}
                    title1="전체"
                    title2="선택"
                    setState={selectPlace}
                />
                <RadioBox
                    data={permObject}
                    layout="col"
                    select={selectPerm} />
            </div>


            <div className={Styles.flex_left}>
                <Link href={"/admin/administrator"}>
                    <Button label="버튼" onClick={submit} />
                </Link>
            </div>
        </div>
    )
}

export default AdminAddClient;