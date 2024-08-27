"use client"

import Input from "@/components/Input/Input";
import { ChangeEvent, useState } from "react";

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
        <div> 
            <div>
                <h1>
                    Sign In
                </h1>
                <Input
                label="User ID"
                name="id"
                value={user.id}
                type="text"
                // placeholder="User ID"
                onChange={handleChange}
                />
            </div>
        </div>
    )
}


export default SignIn;