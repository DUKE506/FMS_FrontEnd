import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'
import { createAdminProps } from "@/types/administrator/adminstrator"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/lib/store"
import { updateField } from "@/lib/features/administrator/adminSlice"

export const FormContainer = ({ createAdmin }: { createAdmin: createAdminProps }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateField({ name, value }));
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
                            value: createAdmin.name,
                            onChange: handleInputChanges
                        }}
                        label="이름"
                        edit
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