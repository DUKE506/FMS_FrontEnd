'use client'

import { useDispatch, useSelector } from "react-redux"
import { FormContainer } from "./Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { submitPlace } from "@/lib/features/place/placeActions"
import { resetForm } from "@/lib/features/place/placeSlice"
import Button from "@/components/Button/Button"
import Styles from './PlaceAddClient.module.css'
import Perm from "./Perm/Perm"

export const PlaceAddClient = () => {
    const dispatch = useDispatch<AppDispatch>()
    const place = useSelector((state: RootState) => state.place)

    const submit = async () => {
        await dispatch(submitPlace(place))
        dispatch(resetForm())
    }

    return (
        <>
            <FormContainer />
            <Perm />
            <div className={Styles.flex_left}>
                <Button label="버튼" onClick={submit} />
            </div>


        </>

    )
}