'use client'
import React, { ReactElement, SVGProps, useState } from 'react';
import Styles from './Toggle.module.css'

interface ToggleProps{
    icon: ReactElement;
    title : string;
    active : boolean;
}



export const Toggle = ({icon, title, active} : ToggleProps) => {
    const [on, setOn] = useState<boolean>(active);

    const color =on ? "#ffffff" : "#518071";

    const OnActive = () => {
        setOn(!on)
    }

    return(
        <div className={`${Styles.toggle} ${on ? Styles.active : ''}`} onClick={OnActive}>
            <div className={Styles.wrap}>
                {
                React.cloneElement(icon,{ fill: color })
                }
                <span className={Styles.title}>{title}</span>
            </div>
        </div>
    )
}


interface ToggleListProps{
    data : ToggleProps[];
}

export const ToggleList = ({data} : ToggleListProps) =>{
    return(
        <div className={Styles.row}>
            {
                data.map((value,idx)=>{
                    return(
                        <Toggle icon={value.icon} title={value.title} active={value.active}/>
                    )
                })
            }
        </div>
    )
}