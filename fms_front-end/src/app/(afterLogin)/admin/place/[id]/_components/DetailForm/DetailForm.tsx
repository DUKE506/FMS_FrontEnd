'use client'
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input";
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import Styles from './DetailForm.module.css'
import { DetailPlaceProps } from "@/types/place/place.type";
import { placeInfoProps, updatePlaceDetail } from "@/lib/features/place/placeDetailSlice";
import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { EditButtons } from "@/app/(afterLogin)/_components/EditButtons/EditButtons";
import { getDetailPlaceInfoAction } from "@/lib/features/place/placeActions";
import { AppDispatch, RootState } from "@/lib/store";
import { infoUpdate } from "@/lib/features/place/placeDetailSlice2";

const DetailForm = ({ placeid,place, edit }: {placeid:number; place: placeInfoProps; edit: boolean }) => {
    const [formEdit, setFormEdit] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const placeInfo = useSelector((state:RootState) => state.placeDetail2.infoData)

    //사업장 정보 조회
    useEffect(() => {
        dispatch(getDetailPlaceInfoAction(placeid))
    }, [dispatch])

    //input 입력 핸들러
    const handleDataChanges = (e : React.ChangeEvent<HTMLInputElement>) => {        
        const {name, value} = e.target;
        dispatch(infoUpdate({name,value}))
    }

    

    return (
        <>
            <BaseContainer
                header={
                <BaseHeader title="사업장 정보">
                    {
                        <EditButtons
                        edit={formEdit}
                        onCancel={()=>setFormEdit(false)}
                        onEdit={()=>setFormEdit(true)}
                        onUpdate={()=>{}}
                        />
                    }
                    
                </BaseHeader>}
            >
                <div className={Styles.grid}>
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '이름',
                            name: 'name',
                            value: placeInfo.name,
                            onChange:handleDataChanges
                        }}
                        edit={formEdit}
                        label="사업장명"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '코드',
                            name: 'code',
                            value: placeInfo.code,
                            onChange:handleDataChanges
                        }}
                        edit={formEdit}
                        label="코드"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '주소',
                            name: 'addr',
                            value: placeInfo.addr,
                            onChange:handleDataChanges
                        }}
                        edit={formEdit}
                        label="주소"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '전화번호',
                            name: 'tel',
                            value: placeInfo.tel,
                            onChange:handleDataChanges
                        }}
                        edit={formEdit}
                        label="전화번호"
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '계약번호',
                            name: 'contractNum',
                            value: placeInfo.contractNum,
                            onChange:handleDataChanges
                        }}
                        edit={formEdit}
                        label="계약번호"
                    />
                    <ColInput
                        input={{
                            type: 'date',
                            placeholder: '계약일자',
                            name: 'contractedAt',
                            value: placeInfo.contractedAt ? moment(place.data.contractedAt).format('YYYY-MM-DD') : '',
                            onChange:handleDataChanges
                        }}
                        edit={formEdit}
                        label="계약일자"
                    />
                    <ColInput
                        input={{
                            type: 'date',
                            placeholder: '해약일자',
                            name: 'canceledAt',
                            value: placeInfo.canceledAt ? moment(place.data.canceledAt).format('YYYY-MM-DD') : '',
                            onChange:handleDataChanges
                        }}
                        edit={formEdit}
                        label="해약일자"
                    />
                    {/* 계약상태 */}

                </div>

            </BaseContainer>
        </>
    )
}


export default DetailForm;