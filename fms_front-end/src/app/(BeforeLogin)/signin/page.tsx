'use client'
import Button from "@/components/Button/Button";
import { Form } from "./_components/Form/Form"

import Styles from './page.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { ChangeEvent, useState } from "react";
import { updateSigninField } from "@/lib/features/user/signInSlice";
import { SignInDto, SignSuccess } from "@/types/sign/sign";
import { signIn } from "@/app/api/user/user";
import Cookie from 'js-cookie';
import { useRouter } from "next/navigation";
import { loginAction } from "@/lib/features/auth/authAction";


//로그인 요청
const Sign = async (user : SignInDto):Promise<boolean> => {
    const res = await signIn(user);
    const {accessToken} = res.data;
    if(!accessToken){
        alert('로그인 실패');
        return false;
    }
    Cookie.set('authToken',accessToken)
    return true;
}

const SigninPage = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [user, setUser]= useState<SignInDto>({
        account : '',
        password : '',
        mode : true,
    })
    const authUser = useSelector((state:RootState)=>state.authUser)
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setUser(prev =>({
            ...prev,
            [name]:value
        }))
    }

    const submit = async () => {        
        if(!user.account || !user.password){
            alert('공백이 존재합니다.');
            return;
        }
        const res = await dispatch(loginAction(user)).unwrap()
        if(!res.accessToken){
            return alert('로그인 실패')
        }
        router.push('/admin/place')
    }

    return(
        <div className={Styles.signin}>
            <div className={Styles.wrap}>
                <span className={Styles.title}>
                    로그인
                </span>
                <Form data={user} onChangeInput={(e)=>handleInputChange(e)}/>
                <Button label="로그인" onClick={submit}/>
            </div>
        </div>
    )
}


export default SigninPage;