import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'
import { createAdminProps } from "@/types/administrator/adminstrator"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/lib/store"
import { updateField } from "@/lib/features/administrator/adminSlice"
import { GroupDto } from "@/types/group/group"
import Select, { SelectDataProps } from "@/app/(afterLogin)/_components/SelectBox/SelectBox"
import { useEffect, useState } from "react"
import { ConvertSelectData } from "@/utills/Selectbox"

export const FormContainer = ({ 
    createAdmin,
    group,
}: { 
    createAdmin: createAdminProps,
    group:GroupDto[]
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectGroup, setSelectGroup] = useState<SelectDataProps>()
    const [convertedGroups, setConvertedGroups] = useState<SelectDataProps[]>([]);

    useEffect(()=>{
        setConvertedGroups(ConvertSelectData(group));
        setSelectGroup(convertedGroups[0]);
        dispatch(updateField({name:'group' , value:convertedGroups[0]?.id}))
    },[group])

    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateField({ name, value }));
    }

    //그룹 선택
    const handleSelectGroup = (groupId:number) => {
        dispatch(updateField({name:'group' , value:groupId}))
    }


    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="관리자" />
                }
            >
                <form className={Styles.col}>
                    <div className={Styles.img}>
                    </div>
                    
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '아이디',
                            name: 'account',
                            value: createAdmin.account,
                            onChange: handleInputChanges
                        }}
                        label="아이디"
                        edit
                    />
                    <ColInput
                        input={{
                            type: 'password',
                            placeholder: '비밀번호',
                            name: 'password',
                            value: createAdmin.password,
                            onChange: handleInputChanges
                        }}
                        label="비밀번호"
                        edit
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '이름',
                            name: 'name',
                            value: createAdmin.name,
                            onChange: handleInputChanges
                        }}
                        label="이름"
                        edit
                    />
                    <Select
                        label="그룹"
                        data={convertedGroups}
                        onSelect={(id)=>handleSelectGroup(id)}
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '이메일',
                            name: 'email',
                            value: createAdmin.email,
                            onChange: handleInputChanges

                        }}
                        label="이메일"
                        edit
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            placeholder: '전화번호',
                            name: 'phone',
                            value: createAdmin.phone,
                            onChange: handleInputChanges

                        }}
                        label="전화번호"
                        edit
                    />
                    <ColInput
                        input={{
                            type: 'text',
                            name: "job",
                            value: createAdmin.job === "" ? "\u00A0" :  createAdmin.job
                        }}
                        label="권한"
                        edit={false}
                    />
                    
                </form>
            </BaseContainer>
        </>
    )
}