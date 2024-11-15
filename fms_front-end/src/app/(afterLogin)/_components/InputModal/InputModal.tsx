'use client'
import { InputHTMLAttributes, ReactNode, useEffect } from "react";
import styles from './InputModal.module.css'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import Button2 from "@/components/Button2/Button2";
import { ColInput } from "../Input/Input";



interface InputModalProps{
    title : string;
    submitTitle : string;
    inputOption: InputHTMLAttributes<HTMLInputElement>;
    value : string;
    onChange : React.Dispatch<React.SetStateAction<string>>;
    submit :  () => void;
    close : () => void;
}

export const InputModal = ({title,submitTitle,inputOption,value,submit,close,onChange} : InputModalProps) => {

    /**
     * 입력값
     * @param e 
     */
    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange(value);
    }

    return(
        <div className={styles.modal}>
            <BaseContainer
            header={
                <BaseHeader
                title={title}
                />
            }
            >
            <div className={styles.col}>
                <ColInput input={{...inputOption,onChange:(e)=>handleInputChanges(e)}} edit/>
                <div className={styles.row}>
                <Button2 label={submitTitle} onClick={submit} />
                <Button2 label="취소" color="red" onClick={close} />
                </div>
            </div>
            
            </BaseContainer>
        </div>
    )
}

interface BackgroundProps{
    children : ReactNode
}
export const BackGround = ({children} : BackgroundProps) =>{
    return(
        <div className={styles.background}>
            {children}
        </div>
    )
}
