import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'
import { Admin, createAdminProps, DetailAdminProps } from "@/types/administrator/adminstrator"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/lib/store"
import { Dispatch, SetStateAction, use, useState } from "react"
import Button from "@/components/Button/Button"
import { updateAdmin } from "@/lib/features/administrator/adminDetailSlice"
import { EditButtons } from "@/app/(afterLogin)/_components/EditButtons/EditButtons"

export const FormContainer = ({ data, edit, setEdit, onUpdate }: { data?: Admin; edit: boolean; setEdit: Dispatch<SetStateAction<boolean>>; onUpdate: () => void }) => {
    // const [edit, setEdit] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateAdmin({ name, value }));
    }

    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="관리자">
                        {
                            // edit ?
                            //     <div>
                            //         <Button label="저장" onClick={onUpdate} />
                            //         <Button label="취소" onClick={() => setEdit(false)} />
                            //     </div>
                            //     :
                            //     <Button label="편집" onClick={() => setEdit(true)} />
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
            </BaseContainer>
        </>
    )
}