'use client'

import { useDispatch, useSelector } from "react-redux";
import { GroupContainer, GroupProps } from "./_components/Group/Group";
import { MemberContainer } from "./_components/Member/Member";
import Styles from './page.module.css'
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { getAllAdminList } from "@/lib/features/administrator/adminAction";
import { FormContainer } from "./_components/Form/Form";
import { AnalysisCard } from "./_components/Card/AnalysislCard";
import { Profile } from "./_components/Profile/Profile";

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
        <div className={`${Styles.row} ${Styles.container}`}>
            <div className={`${Styles.flex1}`}>
                <Profile/>
            </div>
            <div className={`${Styles.col} ${Styles.flex2}`}>
                <div className={`${Styles.row} ${Styles.flex1}`}>
                    <AnalysisCard title="그룹" value={groupMockUp.length}/>
                    <AnalysisCard title="관리자" value={data.length}/>
                    <AnalysisCard title="관리자 평균 사업장" value={groupMockUp.length}/>
                </div>
                <div className={`${Styles.row} ${Styles.flex3}`}>
                    <div className={`${Styles.flex1_5}`}>
                        <GroupContainer groups={groupMockUp} />
                    </div>
                    <div className={`${Styles.flex2}`}>
                        <MemberContainer members={data} />
                    </div>
                </div>
            </div>

        </div>
    )
}



export default ManagerClient;