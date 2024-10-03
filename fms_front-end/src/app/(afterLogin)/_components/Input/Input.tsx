import { InputHTMLAttributes } from "react"
import Styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}


// label, input

const Input = ({ ...props }: InputProps) => {
    return (
        <input className={Styles.input} {...props} />
    )
}

interface LabelProps {
    label: string;
}

const Label = ({ label }: LabelProps) => {
    return (
        <label className={Styles.label}>
            {label}
        </label>
    )
}


export const RowInput = () => {
    return (
        <div className={Styles.row}>

        </div>
    )
}

export const ColInput = () => {
    return (
        <div className={Styles.col}>

        </div>
    )
}

