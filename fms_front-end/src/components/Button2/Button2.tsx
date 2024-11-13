import { ButtonHTMLAttributes } from "react";
import styles from "./Button2.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}



const Button2 = ({ label, ...props }: ButtonProps) => {
    return (
        <button
            className={styles.button}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button2;