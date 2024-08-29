"use client"

import Input from "@/components/Input/Input";
import styles from './signIn.module.css'
import { ChangeEvent, useState } from "react";
import Button from "@/components/Button/Button";
import Form from "./Form";

interface SignInUser{
    id : string;
    password : string;
}



const SignIn = () => {
    const [user, setUser] = useState<SignInUser>({
        id:"",
        password:""
    })
    

    const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setUser(prevUser =>({
            ...prevUser,
            [name] : value
        }));
    }

    const OnClick = () =>{
        console.log(user.id)
    }

    return(
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
                    onClick={OnClick}
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
                <Button label="Sign Up"/>
            </Form>
        </div>
    )
}


export default SignIn;