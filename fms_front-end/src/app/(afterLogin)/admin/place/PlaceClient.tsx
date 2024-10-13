'use client'

import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import { convertDates, getAllPlaceTableData } from "@/lib/features/place/placeActions";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AnalysisCard } from "./_components/Card/AnalysislCard";
import Link from "next/link";
import { IconBtn } from "@/components/IconBtn/IconBtn";
import PlaceTable from "./_components/PlaceTable/PlaceTable";
import styles from './page.module.css'
import moment from "moment";


const PlaceClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.placeTable)


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
                            <IconBtn
                                title="Add"
                                svg={<svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>}
                            />
                        </Link>

                    </BaseHeader>
                }>
                <PlaceTable placedata={data} />
            </BaseContainer>
            {/* {
                selectedPlace !== null ?
                    <PlaceDashBoard /> : '' */}

        </>
    )
}

export default PlaceClient;