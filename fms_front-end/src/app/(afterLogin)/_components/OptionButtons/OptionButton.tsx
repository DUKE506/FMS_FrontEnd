'use client'
import Add from '../../../../../public/images/plus-lg.svg'
import Delete from '../../../../../public/images/trash.svg'
import Edit from '../../../../../public/images/pencil-square.svg'
import Options from '../../../../../public/images/three-dots-vertical.svg'
import Save from '../../../../../public/images/check-lg.svg'
import Cancel from '../../../../../public/images/x-lg.svg'
import { ReactNode, useEffect, useState } from 'react'
import styles from './OptionButton.module.css'

interface OptionButtonProps{
    create : boolean;
    edit : boolean;
    remove : boolean;

    add : () => void;
    update : () => void;
    del : () => void;
}

export const OptionButton = ({create, edit,remove,add,update,del}:OptionButtonProps) =>{
    const [active, setActive] = useState<boolean>(false);
    const [isWork, setIsWork] = useState<boolean>(false);
    const options:OptionProps[] = [];
    useEffect(()=>{
        if(create){
            options.push({
                icon: <Add style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}/>,
                title:'추가',
            })
        }
        if(edit){
            options.push({
                icon: <Edit style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}/>,
                title:'수정',
            })
        }
        if(remove){
            options.push({
                icon: <Delete style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}/>,
                title:'삭제',
            })
        }
    },[])
    //리스트 활성화-비활성화
    const handleOptionsClick = () =>{
        setActive(!active)
    }

    //수정, 삭제 모드 활성화-비활성화
    const handleWork = () => {
        setIsWork(!isWork);
        update();
        del();
    }

    


    return(
        <div className={styles.container}>
            {
                !isWork ?
                <Options 
                style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                onClick={handleOptionsClick}
                />
                :
                <div className={styles.row}>
                    <div >
                        <Save
                        style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                        />
                    </div>
                    <div onClick={handleWork}>
                        <Cancel
                        style={{ fill: 'red', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                        />
                    </div>
                    
                </div>
            }
            
            {
                active ?
                <OptionsList 
                add={add} 
                update={update}
                del={del}
                onWorkMode={handleWork}
                onOptionListActive={handleOptionsClick}
                />
                :
                null
            }
        </div>
    )
}

interface OptionListProps {
    add : () => void,
    update : ()=> void,
    del : ()=> void,

    onWorkMode : ()=>void,
    onOptionListActive : () => void,
}

//옵션 : 추가, 수정, 삭제
const OptionsList = ({
    add,
    update,
    del,

    onWorkMode,
    onOptionListActive

}:OptionListProps) => {
    //수정 및 삭제 클릭 시 활성된 list닫기, 목록표시 -> 편집모드로 변경
    const handleWork = () =>{
        onWorkMode();
        onOptionListActive();
    }

    //수정모드
    const handelUpdate = () => {
        update()
        handleWork()
    }

    //삭제모드
    const handelDel = () => {
        del();
        handleWork();
    }

    return(
        <ul className={`${styles.col} ${styles.list}`}>
            {

            }
            {/* <li className={`${styles.row}`} onClick={add}>
                <Add 
                style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                />
                <span className={`${styles.text}`}>
                    추가
                </span>
            </li>
            <li className={`${styles.row}`} onClick={handelUpdate}>
                <Edit
                style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                />
                <span className={`${styles.text}`}>
                    수정
                </span>
            </li>
            <li className={`${styles.row}`} onClick={handelDel}>
                <Delete
                style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                />
                <span className={`${styles.text}`}>
                    삭제
                </span>
            </li> */}
        </ul>
    )
}

interface OptionProps {
    icon : ReactNode,
    title : string,
    onClick? : ()=>void,
}

const Option = ({icon,title,onClick} : OptionProps) =>{

    return(
        <li className={`${styles.row}`} onClick={onClick}>
        {icon}
        <span className={`${styles.text}`}>
            {title}
        </span>
    </li>
    )
}