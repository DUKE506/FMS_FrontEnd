'use client'
import { useDispatch, useSelector } from "react-redux"
import { FormContainer } from "./_components/Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { useEffect, useState } from "react"
import { getAdminDetail } from "@/lib/features/administrator/adminAction"
import { TransferListContainer } from "@/app/(afterLogin)/_components/TransferLists/TransferList"




export const AdminDetailClient = ({id} : {id:number}) => {
    const dispatch = useDispatch<AppDispatch>();
    const admin = useSelector((state:RootState) => state.adminDetail)

    useEffect(()=>{
        dispatch(getAdminDetail(id))
    },[dispatch])

    return (
        <>
            <FormContainer data={admin.data}/>
        </>     
    )
}

