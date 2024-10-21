'use client'
import Link from "next/link";
import { FormContainer } from "./_components/Form/Form";
import { TransferListContainer } from "./_components/TransferLists/TransferList";
import Styles from './page.module.css'
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button/Button";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { resetForm } from "@/lib/features/administrator/adminSlice";
import { submitAdmin } from "@/lib/features/administrator/adminAction";




const AdminAddClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const admin = useSelector((state:RootState) => state.admin)

    useEffect(()=>{
        //언마운트
        return()=>{
            dispatch(resetForm());
        }
    },[])

    const submit = async () =>{
        await dispatch(submitAdmin(admin));
    }

    return (
        <>
            <FormContainer createAdmin={admin} />
            <div>
                <TransferListContainer/>
            </div>
            <div className={Styles.flex_left}>
                <Link href={"/admin/administrator"}>
                    <Button label="버튼" onClick={submit} />
                </Link>
            </div> 
        </>
    )
}

export default AdminAddClient;