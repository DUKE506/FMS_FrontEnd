import { InputHTMLAttributes } from "react";
import styles from './InputModal.module.css'



interface InputModalProps{
    title : string;
    inputOption: InputHTMLAttributes<HTMLInputElement>
}

export const InputModal = async({title, inputOption} : InputModalProps) => {
    return(
        <div className={styles.modal}>
            <span className={styles.title}>
                {title}
            </span>
            <input className={styles.input} {...inputOption}/>
        </div>
    )
}


export const BackGround = async({}) =>{
    return(
        <div className={styles.background}>

        </div>
    )
}
