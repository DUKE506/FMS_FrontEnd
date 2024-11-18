'use client'
import Add from '../../../../../public/images/plus-lg.svg'
import Delete from '../../../../../public/images/trash.svg'
import Edit from '../../../../../public/images/pencil-square.svg'
import KebabMenu from '../../../../../public/images/three-dots-vertical.svg'
import Save from '../../../../../public/images/check-lg.svg'
import Cancel from '../../../../../public/images/x-lg.svg'
import { ReactNode, useEffect, useState } from 'react'
import styles from './OptionButton.module.css'
import LucideIcon from '../LucideIcon/LucideIcon'

type OptionType = 'create' | 'edit' | 'delete' 

interface OptionProps {
    type : OptionType,
    icon : ReactNode,
    label : string,
    onClick? : ()=>void,
}
interface OptionButtonProps{
    options:Array<OptionType>;
    onAction  : {
        create? : () => void;
        edit? : () => void;
        delete? : () => void;
    };
    disabled? :boolean;
    className? :string;
}

export const OptionButton = ({options, onAction,disabled,className=''}:OptionButtonProps) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const defaultOptions:Record<OptionType, OptionProps>={
        create : {
            type:'create',
            label : '추가',
            icon : <LucideIcon name="Plus" size={18}/>,
            onClick : () => {
                onAction.create?.()
                setIsOpen(false)
            }
        },
        edit : {
            type:'edit',
            label : '수정',
            icon : <LucideIcon name='SquarePen' size={18}/>,
            onClick : () => {
                setIsEditing(true)
                onAction.edit?.()
                setIsOpen(false)
            }
        },
        delete : {
            type:'delete',
            label : '삭제',
            icon : <LucideIcon name='Trash2' size={18}/>,
            onClick : () => {
                onAction.delete?.()
                setIsOpen(false)
            }
        },
    }

    const activeOptions = options
    .filter(type => defaultOptions[type])
    .map(type => defaultOptions[type])

    const handleSave = () => {
        setIsEditing(false)
        onAction.edit?.()
    }
    
    const handleCancel = () => {
        onAction.edit?.()
        onAction.delete?.()
        setIsEditing(false)
    }

    
    return(
        <div className={styles.container}>
            {
                !isEditing ?
                <LucideIcon name="EllipsisVertical"  onClick={() => setIsOpen(!isOpen)}/>
                :
                <div className={styles.row}>
                    <LucideIcon name='Save' onClick={handleSave}/>
                    <LucideIcon name='X' color='delete' onClick={handleCancel}/>
                </div>
            }
            
            {
                isOpen &&(
                    <ul className={`${styles.col} ${styles.list}`}>
                    {
                        activeOptions.map((option,idx)=>{
                            return(
                                <li className={`${styles.row}`} onClick={option.onClick}>
                                    {option.icon}
                                    <span className={`${styles.text}`}>
                                        {option.label}
                                    </span>
                                </li>
                            )
                        })
                            
                    }
                    </ul>
                )
            }
        </div>
    )
}

