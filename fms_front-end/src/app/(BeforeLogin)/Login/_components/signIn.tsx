"use client"

import Input from "@/components/Input/Input";
import { ChangeEvent, useState } from "react";

interface SignInUser{
    id : string;
    password : string;
}



const SignIn = () => {
    const [user, setUser] = useState({
        id:"",
        password:""
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
    }

    return(
        <div> 
            <div>
                <h1>
                    Sign In
                </h1>
                <Input
                value={user.id}
                type="text"
                placeholder="User ID"
                onChange={handleChange}
                />
            </div>
        </div>
    )
}


export default SignIn;