import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'

export const FormContainer = () => {
    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="관리자" />
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

                            }}
                            label="아이디"
                            edit
                        />
                        <ColInput
                            input={{
                                type: 'text',
                                placeholder: '비밀번호',
                                name: 'password',

                            }}
                            label="비밀번호"
                            edit
                        />
                        <ColInput
                            input={{
                                type: 'text',
                                placeholder: '비밀번호 확인',
                            }}
                            label="비밀번호 확인"
                            edit
                        />
                        <ColInput
                            input={{
                                type: 'text',
                                placeholder: '이름',
                                name: 'name',

                            }}
                            label="이름"
                            edit
                        />
                        <ColInput
                            input={{
                                type: 'text',
                                placeholder: '이메일',
                                name: 'email',

                            }}
                            label="이메일"
                            edit
                        />
                        <ColInput
                            input={{
                                type: 'text',
                                placeholder: '전화번호',
                                name: 'phone',

                            }}
                            label="전화번호"
                            edit
                        />
                    </div>
                </form>
            </BaseContainer>
        </>
    )
}