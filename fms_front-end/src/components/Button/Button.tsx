import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}



const Button = ({ label, ...props }: ButtonProps) => {
    return (
        <button
            className={styles.button}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button;