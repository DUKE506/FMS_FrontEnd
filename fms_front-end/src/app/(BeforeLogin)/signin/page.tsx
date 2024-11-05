'use client'
import Button from "@/components/Button/Button";
import { Form } from "./_components/Form/Form"

import Styles from './page.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { ChangeEvent } from "react";
import { updateSigninField } from "@/lib/features/user/signInSlice";


const SigninPage = () => {
    const dispatch = useDispatch()
    const user = useSelector((state:RootState)=>state.signIn)

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        dispatch(updateSigninField({name,value}))
    }

    const submit = () => {
        console.log('as')
        if(!user.account || !user.password){
            console.log('as')
            alert('공백이 존재합니다.');
            return;
        }
    }

    return(
        <div className={Styles.signin}>
            <div className={Styles.wrap}>
                <span className={Styles.title}>
                    로그인
                </span>
                <Form data={user} onChangeInput={(e:ChangeEvent<HTMLInputElement>)=>handleInputChange(e)}/>
                <Button label="로그인" onClick={submit}/>
            </div>
        </div>
    )
}


export default SigninPage;