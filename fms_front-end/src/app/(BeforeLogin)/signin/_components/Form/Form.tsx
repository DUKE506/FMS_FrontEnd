import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"

import Styles from './Form.module.css'
import { SignInDto } from "@/types/sign/sign"
import { ChangeEvent } from "react";

interface formProps {
    data : SignInDto;
    onChangeInput : (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({data,onChangeInput}:formProps) => {
    return(
        <form className={Styles.form}>
            <ColInput
            label="아이디"
            input={{
                type : 'text',
                placeholder : '아이디',
                value : data.account,
                name : 'account',
                onChange:(e)=>onChangeInput(e),
            }}
            edit
            />
            <ColInput
            label="비밀번호"
            input={{
                type : 'password',
                placeholder : '비밀번호',
                value:data.password,
                name : 'password',
                onChange:(e)=>onChangeInput(e),
            }}
            edit
            />
        </form>
    )
}

