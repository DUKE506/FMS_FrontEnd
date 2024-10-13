'use client'
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input";
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import Styles from './DetailForm.module.css'
import { DetailPlaceProps } from "@/types/place/place.type";
import { placeInfoProps } from "@/lib/features/place/placeDetailSlice";
import { useEffect } from "react";
import moment from "moment";

const DetailForm = ({ place, edit }: { place: placeInfoProps; edit: boolean }) => {

    useEffect(() => {
    }, [])

    return (
        <>
            <BaseContainer
                header={<BaseHeader title="사업장 정보" />}
            >
                <div className={Styles.grid}>
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '이름',
                            name: 'name',
                            value: place.data.name,
                        }}
                        edit={edit}
                        label="사업장명"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '코드',
                            name: 'code',
                            value: place.data.code,
                        }}
                        edit={edit}
                        label="코드"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '주소',
                            name: 'addr',
                            value: place.data.addr,
                        }}
                        edit={edit}
                        label="주소"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '전화번호',
                            name: 'tel',
                            value: place.data.tel,
                        }}
                        edit={edit}
                        label="전화번호"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '계약번호',
                            name: 'contractNum',
                            value: place.data.contractNum,
                        }}
                        edit={edit}
                        label="계약번호"
                    />
                    <ColInput
                        input={{
                            type: 'date',
                            placeholder: '계약일자',
                            name: 'contracatedAt',
                            value: place.data.contractedAt ? moment(place.data.contractedAt).format('YYYY-MM-DD') : ''
                        }}
                        edit={edit}
                        label="계약일자"
                    />
                    <ColInput
                        input={{
                            type: 'date',
                            placeholder: '해약일자',
                            name: 'canceledAt',
                            value: place.data.canceledAt ? moment(place.data.canceledAt).format('YYYY-MM-DD') : ''
                        }}
                        edit={edit}
                        label="해약일자"
                    />
                    {/* 계약상태 */}

                </div>

            </BaseContainer>
        </>
    )
}


export default DetailForm;