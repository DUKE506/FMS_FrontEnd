import { InputHTMLAttributes } from "react"
import Styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

interface TextProps {
    value: string | Date | number | readonly string[] | undefined;
}

// label, input

const Input = ({ ...props }: InputProps) => {
    return (
        <input className={Styles.input} {...props} />
    )
}

const TextField = ({ value }: TextProps) => {
    const displayValue = () => {
        if (value instanceof Date) {
            return value.toLocaleDateString();
        }
        return String(value);
    }
    return (
        <p className={Styles.text}>
            {displayValue()}
        </p>
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
    edit?: boolean,
}

export const RowInput = ({ input, label, edit }: InputContainerProps) => {
    return (
        <div className={Styles.row}>
            <Label label={label} />
            {
                edit ?
                    <Input {...input} /> :
                    <TextField value={input.value} />
            }

        </div>
    )
}

export const ColInput = ({ input, label, edit }: InputContainerProps) => {
    return (
        <div className={Styles.col}>
            <Label label={label} />
            {
                edit ?
                    <Input {...input} /> :
                    <TextField value={input.value} />
            }
        </div>
    )
}

