'use client'
import { InputHTMLAttributes, ReactNode } from "react";
import styles from './InputModal.module.css'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import Button2 from "@/components/Button2/Button2";



interface InputModalProps{
    title : string;
    submitTitle : string;
    inputOption: InputHTMLAttributes<HTMLInputElement>
}

export const InputModal = ({title,submitTitle, inputOption} : InputModalProps) => {
    const handleBtnAction= () =>{

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
                <input className={styles.input} {...inputOption}/>
            </div>
            <div>
                <Button2 label={submitTitle} onClick={handleBtnAction} />
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
