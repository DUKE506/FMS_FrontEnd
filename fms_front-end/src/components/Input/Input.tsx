import { InputHTMLAttributes } from "react";
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label? : string;
    errMessage? : string;
}


const Input = ({label, errMessage, ...props} : InputProps) =>{
    return(
        <div className={styles.inputbox}>
            <input
                className={styles.input}
                {...props}
                required
            />
            {label && <label className={styles.label}>{label}</label>}
            {errMessage && <span>{errMessage}</span>}
        </div>
    )
}

export default Input;