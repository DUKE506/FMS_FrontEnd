'use client'
import Link from "next/link";
import { FormContainer } from "./_components/Form/Form";
import { TransferItem, TransferListContainer } from "./_components/TransferLists/TransferList";
import Styles from './page.module.css'
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button/Button";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { resetForm, updatePlace } from "@/lib/features/administrator/adminSlice";
import { submitAdmin } from "@/lib/features/administrator/adminAction";
import { getAllPlaceListAction } from "@/lib/features/place/placeActions";
import { ConverterTransferList } from "@/utills/transformers";
import { BaseContainer } from "@/components/BaseContainer/Base";




const AdminAddClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const admin = useSelector((state:RootState) => state.admin);
    const place = useSelector((state:RootState) => state.placeList);
    const [transferData, setTransferData] = useState<TransferItem[]>([]);
    // const [selectPlace, setSelectPlace] = useState<TransferItem[]>([]);

    useEffect(() => {
        dispatch(getAllPlaceListAction());
    }, [dispatch]);

    

    useEffect(()=>{
        if(place.data.length >0){
            const converted = ConverterTransferList(place.data);
            setTransferData(converted);
        }
    },[place.data])

    useEffect(()=>{
        dispatch(getAllPlaceListAction());
        //언마운트
        return()=>{
            dispatch(resetForm());
        }
    },[])

    //사업장 선택 함수
    const selectPlace = (select : TransferItem[]) =>{
        const value:number[] = [];
        select.map((v,i)=>{
            value.push(v.id);
        })
        dispatch(updatePlace(value))
    }

    //관리자 등록
    const submit = async () =>{
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
                <div className={Styles.col}>
                    <BaseContainer>
                    <span>
                        권한1
                    </span>
                    </BaseContainer>
                    <BaseContainer>
                    <span>
                        권한2
                    </span>
                    </BaseContainer>
                </div>
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