import styles from './page.module.css'
import { AnalysisCard } from "./_components/Card/AnalysislCard";
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import { IconBtn } from "@/components/IconBtn/IconBtn";
import { findAllPlaceTable } from "@/app/api/place/place";
import PlaceTable from "./_components/PlaceTable/PlaceTable";
import { PlaceTableProps } from "@/types/place/place.type";
import PlaceDashBoard from './_components/PlaceDashBoard/PlaceDashBoard';
import Link from 'next/link';
import PlaceClient from './PlaceClient';




/**
 * 사업장 테이블 조회
 * @returns 
 */
const getPlaceTables = async (): Promise<PlaceTableProps[]> => {
    const res = await findAllPlaceTable();
    if (res.status !== 200) {
        throw new Error(`조회 실패 : ${res.status} ${res.statusText}}`)
    }

    return res.data;
}


const Place = async ({ }) => {
    const places = await getPlaceTables();
    const selectedPlace = null;

    return (
        <div className={styles.place}>

            <PlaceClient />
        </div>


    )
}

export default Place;