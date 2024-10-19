'use client'
import React, { ReactElement, SVGProps, useState } from 'react';
import Styles from './Toggle.module.css'

interface ToggleProps {
    icon: ReactElement;
    title: string;
    name: string;
    value: boolean;
    onChange: (name: string, value: boolean) => void;
}



export const Toggle = ({ icon, title, value, name, onChange }: ToggleProps) => {
    const [on, setOn] = useState<boolean>(value);

    const color = value ? "#ffffff" : "#518071";

    const OnActive = () => {
        const newValue = !on;
        value = newValue;
        setOn(newValue)
        onChange(name, newValue);
    }

    return (
        <div className={`${Styles.toggle} ${value ? Styles.active : ''}`} onClick={OnActive}>
            <div className={Styles.wrap}>
                {
                    React.cloneElement(icon, { fill: color })
                }
                <span className={Styles.title}>{title}</span>
            </div>
        </div>
    )
}


interface ToggleListProps {
    data: ToggleProps[];
}

export const ToggleList = ({ data, }: ToggleListProps) => {
    return (
        <div className={Styles.row}>
            {
                data.map((value, idx) => {
                    return (
                        <Toggle
                            icon={value.icon}
                            title={value.title}
                            name={value.name}
                            value={value.value}
                            onChange={value.onChange || (() => { })}
                        />
                    )
                })
            }
        </div>
    )
}