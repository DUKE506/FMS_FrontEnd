import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'
import { createAdminProps, DetailAdminProps } from "@/types/administrator/adminstrator"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/lib/store"
import { updateField } from "@/lib/features/administrator/adminSlice"
import { use, useState } from "react"
import Button from "@/components/Button/Button"

export const FormContainer = ({ data }: { data?: DetailAdminProps }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateField({ name, value }));
    }
    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="관리자">
                        {
                            edit ?
                            <div>
                                <Button label="저장"/>
                                <Button label="취소" onClick={()=>setEdit(false)}/>
                            </div> 
                            :
                            <Button label="편집" onClick={()=>setEdit(true)}/>
                        }
                    </BaseHeader>   
                
                }
            >
                <form className={Styles.row}>
                    <div className={Styles.img}>
                    </div>
                    <div className={Styles.grid}>
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
                        />
                        {/* <ColInput
                            input={{
                                type: 'text',
                                placeholder: '비밀번호 확인',
                            }}
                            label="비밀번호 확인"
                            edit
                        /> */}
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
                    </div>
                </form>
            </BaseContainer>
        </>
    )
}