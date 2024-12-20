'use client'

import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import { convertDates, getAllPlaceTableData, getPlaceAdminAction } from "@/lib/features/place/placeActions";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AnalysisCard } from "./_components/Card/AnalysislCard";
import Link from "next/link";
import { IconBtn } from "@/components/IconBtn/IconBtn";
import PlaceTable from "./_components/PlaceTable/PlaceTable";
import styles from './page.module.css'
import LucideIcon from "../../_components/LucideIcon/LucideIcon";
import { ManagerTable } from "./add/_components/ManagerTable/ManagerTable";
import { Pagenation } from "../../_components/Pagenation/Pagenation";



const PlaceClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.placeTable)
    const place = useSelector((state: RootState) => state.place)

    useEffect(() => {
        dispatch(getAllPlaceTableData()).then(() => {
            dispatch(convertDates());
        });
    }, [])

    return (
        <>
            <div className={styles.analysis_section}>
                <BaseContainer>
                    <AnalysisCard title='전체 사업장수' value={data.length} />
                </BaseContainer>
                <BaseContainer>
                    <AnalysisCard title='사업장별 평균 매니저 수' value={4.6} />
                </BaseContainer>
                <BaseContainer>
                    <AnalysisCard title='사업장별 평균 직원 수' value={24.8} />
                </BaseContainer>
            </div>
            <BaseContainer
                header={
                    <BaseHeader title="사업장">
                        <Link href='/admin/place/add'>
                            <LucideIcon
                            name='Plus'
                            />
                        </Link>

                    </BaseHeader>
                }>
                    <div>
                        <Pagenation totalPage={5} curPage={1}/>
                        <PlaceTable placedata={data} />
                    </div>
            </BaseContainer>
        </>
    )
}

export default PlaceClient;