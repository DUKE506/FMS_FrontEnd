'use client'
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'
import { useState } from "react"
import { CreatePlaceProps } from "@/types/place/place.type"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { updateField } from "@/lib/features/place/placeSlice"

/**
 * 이미지 / 입력 폼형태 구조
 * 
 */
export const FormContainer = () => {

    return (
        <div>
            <BaseContainer
                header={
                    <BaseHeader title="사업장 정보" />
                }
            >
                <Form />
            </BaseContainer>

        </div>
    )
}

export const Form = () => {
    const dispatch = useDispatch();
    const place = useSelector((state: RootState) => state.place);

    const handelInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateField({ name, value }))
    }


    return (
        <div className={Styles.form}>
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '이름',
                    name: 'name',
                    value: place.name,
                    onChange: handelInputChanges
                }}
                label="이름"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '코드',
                    name: 'code',
                    value: place.code,
                    onChange: handelInputChanges
                }}
                label="코드"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '전화번호',
                    name: 'tel',
                    value: place.tel,
                    onChange: handelInputChanges
                }}
                label="전화번호"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '주소',
                    name: 'addr',
                    value: place.addr,
                    onChange: handelInputChanges
                }}
                label="주소"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '계약번호',
                    name: 'contractNum',
                    value: place.contractNum,
                    onChange: handelInputChanges
                }}
                label="계약번호"
            />
            <ColInput
                input={{
                    type: 'date',
                    placeholder: '계약일자',
                    name: 'contractedAt',
                    // value: place.contractedAt,
                    onChange: handelInputChanges
                }}
                label="계약일자"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '비고',
                    name: 'note',
                    value: place.note,
                    onChange: handelInputChanges
                }}
                label="비고"
            />
        </div>
    )
}
