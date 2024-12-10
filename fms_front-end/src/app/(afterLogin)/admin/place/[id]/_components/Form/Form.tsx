'use client'
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input";
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import Styles from './Form.module.css'
import { DetailPlaceInfoProps} from "@/types/place/place.type";
import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { EditButtons } from "@/app/(afterLogin)/_components/EditButtons/EditButtons";
import { getDetailPlaceInfoAction, updatePlaceInfoAction } from "@/lib/features/place/placeActions";
import { AppDispatch, RootState } from "@/lib/store";


const Form = ({ placeid }: {placeid:number }) => {
    const [formEdit, setFormEdit] = useState<boolean>(false);
    const [info, setInfo] = useState<DetailPlaceInfoProps>({
        id: 0,
        code: '',
        name: '',
        addr: '',
        tel: '',
        contractNum: '',
        contractedAt: new Date,
        canceledAt: new Date,
        state: true,
    });
    const dispatch = useDispatch<AppDispatch>();
    const placeInfo = useSelector((state:RootState) => state.placeDetail2.infoData)

    //사업장 정보 조회
    useEffect(() => {
        dispatch(getDetailPlaceInfoAction(placeid))
    }, [dispatch])

    useEffect(()=>{
        setInfo(placeInfo);
    },[placeInfo])

    //input 입력 핸들러
    const handleDataChanges = (e : React.ChangeEvent<HTMLInputElement>) => {        
        const {name, value} = e.target;
        setInfo(prev => ({
            ...prev,
            [name] : value
        }))
    }

    //수정 취소
    const handleEditCancel = () =>{
        setFormEdit(false); // 수정모드 변경
        setInfo(placeInfo) // 수정 값 초기화
    }

    //수정 저장
    const handleUpdate = () => {
        dispatch(updatePlaceInfoAction({
            placeid : placeid,
            placeinfo : info,
        }));

        setFormEdit(false);
    }    

    return (
        <>
            <BaseContainer
                header={
                <BaseHeader title="사업장 정보">
                    {
                        <EditButtons
                        edit={formEdit}
                        onCancel={handleEditCancel}
                        onEdit={()=>setFormEdit(true)}
                        onUpdate={handleUpdate}
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
                            value: formEdit ? info.name :  placeInfo.name,
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
                            value: formEdit ? info.code : placeInfo.code,
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
                            value: formEdit ? info.addr : placeInfo.addr ,
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
                            value: formEdit ? info.tel : placeInfo.tel,
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
                            value: formEdit ? info.contractNum :placeInfo.contractNum ,
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
                            value: formEdit ?  moment(info.contractedAt).format('YYYY-MM-DD') : moment(placeInfo.contractedAt).format('YYYY-MM-DD'),
                            // placeInfo.contractedAt ? moment(place.data.contractedAt).format('YYYY-MM-DD') : ''
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
                            value: formEdit ? (info.canceledAt ? moment(info.canceledAt).format('YYYY-MM-DD') : '') : ( placeInfo.canceledAt ? moment(placeInfo.canceledAt).format('YYYY-MM-DD') : ''),
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


export default Form;