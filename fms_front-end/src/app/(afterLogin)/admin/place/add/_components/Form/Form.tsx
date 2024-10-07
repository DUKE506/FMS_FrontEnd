import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Form.module.css'


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
    return (
        <div className={Styles.form}>
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '이름',
                }}
                label="이름"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '코드',
                }}
                label="코드"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '전화번호',
                }}
                label="전화번호"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '주소',
                }}
                label="주소"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '계약번호',
                }}
                label="계약번호"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '계약일자',
                }}
                label="계약일자"
            />
            <ColInput
                input={{
                    type: 'text',
                    placeholder: '비고',
                }}
                label="비고"
            />
        </div>
    )
}
