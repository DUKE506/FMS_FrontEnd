'use client'

import { useDispatch, useSelector } from "react-redux"
import { FormContainer } from "./Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { submitPlace } from "@/lib/features/place/placeActions"
import { resetForm } from "@/lib/features/place/placeSlice"
import Button from "@/components/Button/Button"
import Styles from './PlaceAddClient.module.css'
import Perm from "../../_components/Perm/Perm"
import { useEffect } from "react"
import Link from "next/link"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import { ManagerTable } from "./ManagerTable/ManagerTable"


export const PlaceAddClient = () => {
    const dispatch = useDispatch<AppDispatch>()
    const place = useSelector((state: RootState) => state.place)


    useEffect(()=>{
        return()=>{
            dispatch(resetForm())
        }
    },[dispatch])

    const submit = async () => {
        await dispatch(submitPlace(place))
        dispatch(resetForm())
    }

    return (
        <>
            <FormContainer />
            <Perm place={place} edit={true} mode="create"/>
            <BaseContainer
            header={
                <BaseHeader title="관리자"/>
            }
            >
                <ManagerTable/>
            </BaseContainer>
            <div className={Styles.flex_left}>
                <Link href={"/admin/place"}>
                    <Button label="버튼" onClick={submit} />
                </Link>
            </div>


        </>

    )
}