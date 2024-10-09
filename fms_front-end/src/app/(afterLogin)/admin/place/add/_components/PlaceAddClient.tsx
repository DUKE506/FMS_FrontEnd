'use client'

import { useDispatch, useSelector } from "react-redux"
import { FormContainer } from "./Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { submitPlace } from "@/lib/features/place/placeActions"
import { resetForm } from "@/lib/features/place/placeSlice"


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
            <button onClick={submit}>버튼</button>
        </>

    )
}