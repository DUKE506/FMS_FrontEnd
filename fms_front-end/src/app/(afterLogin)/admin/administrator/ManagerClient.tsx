'use client'

import { useDispatch, useSelector } from "react-redux";
import { GroupContainer, GroupProps } from "./_components/Group/Group";
import { MemberContainer } from "./_components/Member/Member";
import Styles from './page.module.css'
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { getAllAdminList } from "@/lib/features/administrator/adminAction";

const groupMockUp: GroupProps[] = [
    {
        id: 1,
        title: '부서1'
    },
    {
        id: 2,
        title: '부서2'
    },
    {
        id: 3,
        title: '부서3'
    },
    {
        id: 4,
        title: '부서4'
    },
    {
        id: 5,
        title: '부서5'
    },
    {
        id: 6,
        title: '부서6'
    },
    {
        id: 7,
        title: '부서7'
    },
]

const ManagerClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.adminList)

    useEffect(() => {
        dispatch(getAllAdminList());
    }, [])

    return (
        <>
            <div className={Styles.row}>
                <GroupContainer grouplist={groupMockUp} />
                <MemberContainer members={data} />
            </div>

        </>
    )
}



export default ManagerClient;