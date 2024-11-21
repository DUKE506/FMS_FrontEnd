'use client'

import { useDispatch, useSelector } from "react-redux";
import { GroupContainer } from "./_components/Group/Group";
import { MemberContainer } from "./_components/Member/Member";
import Styles from './page.module.css'
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { getAllAdminList, getAvgAdminPlace } from "@/lib/features/administrator/adminAction";
import { FormContainer } from "./_components/Form/Form";
import { AnalysisCard } from "./_components/Card/AnalysislCard";
import { Profile } from "./_components/Profile/Profile";
import { getGroupAction } from "@/lib/features/group/groupAction";
import { findAvgAdminPlace } from "@/app/api/administrator/administrator";



const ManagerClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.adminList)
    const group = useSelector((state:RootState) => state.groupAll)
    const [avgGroup, setAvgGroup] = useState<string>('');

    useEffect(() => {
        const fetchData =async()=>{
            dispatch(getAllAdminList());
            dispatch(getGroupAction())
            
            const res = await dispatch(getAvgAdminPlace())
            const avg = res.payload as string
            if(avg){
                setAvgGroup(avg)
            }
        }
        fetchData();
    }, [dispatch])


    return (
        <div className={`${Styles.row} ${Styles.container}`}>
            <div className={`${Styles.flex1}`}>
                <Profile/>
            </div>
            <div className={`${Styles.col} ${Styles.flex2}`}>
                <div className={`${Styles.row} ${Styles.flex1}`}>
                    <AnalysisCard title="그룹" value={group.data.length}/>
                    <AnalysisCard title="관리자" value={data.length}/>
                    <AnalysisCard title="관리자 평균 사업장" value={Number(avgGroup)}/>
                </div>
                <div className={`${Styles.row} ${Styles.flex3}`}>
                    <div className={`${Styles.flex1_5}`}>
                        <GroupContainer groups={group.data} />
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