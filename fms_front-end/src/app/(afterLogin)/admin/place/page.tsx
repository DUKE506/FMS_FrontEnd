import { Body, Columns, Header, HeaderCell, HeaderRow, Table } from "./_components/Table/Table";
import styles from './page.module.css'
import { AnalysisCard } from "./_components/Card/AnalysislCard";
import { useState } from "react";
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import { IconBtn } from "@/components/IconBtn/IconBtn";
import { findAllPlaceTable } from "@/app/api/place/place";
import PlaceTable from "./_components/PlaceTable/PlaceTable";

//사업장 테이블 인터페이스
interface PlaceTableProps {
    id: number;
    code: string;
    name: string;
    addr: string;
    contractNum: string;
    tel: string;
    contractedAt: Date;
    state: boolean
}



const getPlaceTables = async () => {
    const res = await findAllPlaceTable();
    if(!res.ok) {throw new Error('조회 실패')};
    return res.json();
}


const Place = async ({ }) => {
    const places = await getPlaceTables();

    return (
        <div className={styles.place}>
            <div className={styles.analysis_section}>
                <BaseContainer>
                    <AnalysisCard title='전체 사업장수' value={places.length} />
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
                        <IconBtn
                            title="Add"
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>}
                        />
                    </BaseHeader>
                }>
                    <PlaceTable placedata={places}/>
            </BaseContainer>
        </div>


    )
}

export default Place;