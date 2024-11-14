import { ButtonHTMLAttributes } from "react";
import styles from "./Button2.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    color? : string;
}



const Button2 = ({ label,color, ...props }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[color ?? "default"]}`}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button2;