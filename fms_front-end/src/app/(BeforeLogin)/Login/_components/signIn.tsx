"use client"

import Input from "@/components/Input/Input";
import styles from './signIn.module.css'
import { ChangeEvent, useState } from "react";
import Button from "@/components/Button/Button";
import Form from "./Form";
import Panel from "./Panel";
import { useRouter } from "next/navigation";

interface SignInUser {
    id: string;
    password: string;
}



const SignIn = () => {
    //login User객체 상태
    const [user, setUser] = useState<SignInUser>({
        id: "",
        password: ""
    })

    // 현재 로그인 모드 (로그인 또는 회원가입)
    const [isLogin, setIsLogin] = useState<boolean>(false);

    //라우턴
    const router = useRouter();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }


    return (
        <div className={styles.sign}>
            <Form title="Sign In">
                <Input
                    label="User ID"
                    name="id"
                    value={user.id}
                    type="text"
                    // placeholder="User ID"
                    onChange={handleChange}
                />
                <Input
                    label="User PW"
                    name="password"
                    value={user.password}
                    type="text"
                    // placeholder="User ID"
                    onChange={handleChange}
                />
                <Button
                    label="Sign In"
                    onClick={()=>router.push('/admin/place')}
                />
            </Form>
            <Form title="Sign Up">
                <Input
                    label="User ID"
                    name="id"
                    value={user.id}
                    type="text"
                    // placeholder="User ID"
                    onChange={handleChange}
                />
                <Input
                    label="User PW"
                    name="password"
                    value={user.password}
                    type="text"
                    // placeholder="User ID"
                    onChange={handleChange}
                />
                <Button label="Sign Up" />
            </Form>
            <Panel
                state={isLogin}
                setState={setIsLogin}
            />
        </div>
    )
}


export default SignIn;