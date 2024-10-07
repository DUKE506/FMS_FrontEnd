import { InputHTMLAttributes } from "react"
import Styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }


// label, input

const Input = ({ ...props }: InputProps) => {
    return (
        <input className={Styles.input} {...props} />
    )
}

interface LabelProps {
    label?: string;
}

const Label = ({ label }: LabelProps) => {
    return (
        <label className={Styles.label}>
            {label}
        </label>
    )
}


interface InputContainerProps {
    input: InputHTMLAttributes<HTMLInputElement>,
    label?: string,
}

export const RowInput = ({ input, label }: InputContainerProps) => {
    return (
        <div className={Styles.row}>
            <Label label={label} />
            <Input {...input} />
        </div>
    )
}

export const ColInput = ({ input, label }: InputContainerProps) => {
    return (
        <div className={Styles.col}>
            <Label label={label} />
            <Input {...input} />
        </div>
    )
}

