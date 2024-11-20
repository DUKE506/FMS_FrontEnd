import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'
import { Admin, createAdminProps, DetailAdminProps } from "@/types/administrator/adminstrator"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/lib/store"
import { Dispatch, SetStateAction, use, useEffect, useState } from "react"
import Button from "@/components/Button/Button"
import { updateAdmin } from "@/lib/features/administrator/adminDetailSlice"
import { EditButtons } from "@/app/(afterLogin)/_components/EditButtons/EditButtons"
import { ProfileBody } from "../../../_components/Profile/Profile"
import Select, { SelectDataProps } from "@/app/(afterLogin)/_components/SelectBox/SelectBox"
import { GroupDto } from "@/types/group/group"
import { updateField } from "@/lib/features/administrator/adminSlice"
import { ConvertSelectData } from "@/utills/Selectbox"

export const FormContainer = ({ 
    data, edit, setEdit, onUpdate,group 
}: { 
    data: Admin; 
    edit: boolean; 
    setEdit: Dispatch<SetStateAction<boolean>>; 
    onUpdate: () => void;
    group:GroupDto[]
}) => {
    // const [edit, setEdit] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const [selectGroup, setSelectGroup] = useState<SelectDataProps>()
    const [convertedGroups, setConvertedGroups] = useState<SelectDataProps[]>([]);

    useEffect(()=>{
        setConvertedGroups(ConvertSelectData(group));
        setSelectGroup(convertedGroups.find(g => g.id === data?.group?.id))
        dispatch(updateField({name:'group' , value:convertedGroups[0]?.id}))
    },[group,data])

    //input 입력 메서드
    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateAdmin({ name, value }));
    }

    //그룹 선택 메서드
    const handleSelectGroup = (groupId:number) => {
        const selectGroup = group.find(g => g.id === groupId);
        if(!selectGroup){
            return window.alert('잘못된 그룹입니다.');
        }
        dispatch(updateAdmin({name:'group' , value: selectGroup}))
    }

    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="관리자">
                        {
                            <EditButtons
                                edit={edit}
                                onEdit={() => setEdit(true)}
                                onCancel={() => setEdit(false)}
                                onUpdate={onUpdate}
                            />
                        }
                    </BaseHeader>
                }
            >
                {
                    edit ?
                        <form className={Styles.col}>
                            <div className={Styles.img}>
                            </div>
                            <ColInput
                                input={{
                                    type: 'text',
                                    placeholder: '이름',
                                    name: 'name',
                                    value: data?.name,
                                    onChange: handleInputChanges
                                }}
                                label="이름"
                                edit={edit}
                            />
                            <ColInput
                                input={{
                                    type: 'text',
                                    placeholder: '아이디',
                                    name: 'account',
                                    value: data?.account,
                                    onChange: handleInputChanges
                                }}
                                label="아이디"
                                edit={edit}
                            />
                            {
                                edit ?
                                    <ColInput
                                        input={{
                                            type: 'password',
                                            placeholder: '비밀번호',
                                            name: 'password',
                                            value: data?.password,
                                            onChange: handleInputChanges
                                        }}
                                        label="비밀번호"
                                        edit={edit}
                                    /> : null
                            }
                            <Select
                            label="그룹"
                            data={convertedGroups}
                            onSelect={handleSelectGroup}
                            select={selectGroup}
                            />
                            <ColInput
                                input={{
                                    type: 'text',
                                    placeholder: '이메일',
                                    name: 'email',
                                    value: data?.email,
                                    onChange: handleInputChanges

                                }}
                                label="이메일"
                                edit={edit}
                            />
                            <ColInput
                                input={{
                                    type: 'text',
                                    placeholder: '전화번호',
                                    name: 'phone',
                                    value: data?.phone,
                                    onChange: handleInputChanges

                                }}
                                label="전화번호"
                                edit={edit}
                            />
                            <ColInput
                                input={{
                                    type: 'text',
                                    name: "job",
                                    value: data?.job
                                }}
                                label="권한"
                                edit={false}
                            />
                        </form>
                        :
                        <ProfileBody data={data} />
                }

            </BaseContainer>
        </>
    )
}