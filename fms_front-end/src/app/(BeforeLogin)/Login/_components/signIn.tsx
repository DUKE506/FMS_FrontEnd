"use client"

import Input from "@/components/Input/Input";
import styles from './signIn.module.css'
import { ChangeEvent, useState } from "react";
import Button from "@/components/Button/Button";

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

    return(
        <div className={styles.sign}> 
            <div className={styles.item}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}>
                        Sign In
                    </h1>
                    <div className={styles.form}>
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
                    </div>
                    <Button label="Sign In"/>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}>
                        Sign Up
                    </h1>
                    <div className={styles.form}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignIn;