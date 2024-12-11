'use client'

import { useDispatch, useSelector } from "react-redux"
import { Form } from "./Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { submitPlace } from "@/lib/features/place/placeActions"
import { resetForm, updateField } from "@/lib/features/place/placeSlice"
import Styles from './PlaceAddClient.module.css'
import { useEffect } from "react"
import Link from "next/link"
import Perm from "./Perm/Perm"
import Button2 from "@/components/Button2/Button2"
import Admin from "./Admin/Admin"


export const PlaceAddClient = () => {
    const dispatch = useDispatch<AppDispatch>()
    const place = useSelector((state: RootState) => state.place)


    useEffect(() => {
        return () => {
            dispatch(resetForm())
        }
    }, [dispatch])


    //사업장 추가
    const submit = async () => {
        await dispatch(submitPlace(place))
        dispatch(resetForm())
    }


    return (
        <>
            <span style={{fontWeight:"bold", color:'#518071'}}>사업장 생성</span>
            <Form />
            <Perm/>
            <Admin/>
            <div className={Styles.flex_left}>
                <Link href={"/admin/place"}>
                    <Button2 label="생성" onClick={submit} />
                </Link>
            </div>
        </>

    )
}