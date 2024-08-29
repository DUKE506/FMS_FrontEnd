import { ChangeEvent, ReactNode } from "react";
import styles from './Form.module.css'

interface FormProps{
    title : string;
    children : ReactNode;
    button? : ReactNode;
}


const Form = ({title, children, button}:FormProps) =>{
    return(
        <div className={styles.form}>
            <h1 className={styles.title}>
                {title}
            </h1>
            <div className={styles.inputs}>
                {children}
            </div>
            {button}
        </div>
    )
}

export default Form;