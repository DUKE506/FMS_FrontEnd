'use client'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import { AppDispatch, RootState } from "@/lib/store";
import { ListAdminProps } from "@/types/administrator/adminstrator";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ManagerTable } from "../../../add/_components/ManagerTable/ManagerTable";
import { getPlaceAdminAction } from "@/lib/features/place/placeActions";
import LucideIcon from "@/app/(afterLogin)/_components/LucideIcon/LucideIcon";



const Admin = ({placeid} : {placeid:number}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [placeAdmin, setPlaceAdmin] = useState<ListAdminProps[]>([]);
    
    const dispatch = useDispatch<AppDispatch>();
    const placeAdmins = useSelector((state:RootState)=> state.placeAdmin)

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
        setPlaceAdmin(convert)
        
    },[dispatch])

    //수정 취소
    const handleCancel = () => {
        setEdit(false);
    }
    
    return(
        <BaseContainer
        header={
            <BaseHeader title="관리자">
                <LucideIcon name="Plus"/>
            </BaseHeader>
        }
        >
            <ManagerTable members={placeAdmin}/>
        </BaseContainer>
    )
}


export default Admin;