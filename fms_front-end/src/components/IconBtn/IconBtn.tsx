import styles from './IconBtn.module.css'
import { ButtonHTMLAttributes, ReactNode, SVGProps } from "react";


interface IconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    svg?: ReactNode;
}

export const IconBtn = ({ title, svg, ...props }: IconBtnProps) => {
    return (
        <button {...props} className={styles.btn}>
            <span className={styles.icon}>{svg}</span>
            <div className={styles.explain}>
                {title}
            </div>
        </button>
    )
}