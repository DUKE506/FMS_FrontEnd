import Add from '../../../../../public/images/plus-lg.svg'
import Delete from '../../../../../public/images/trash.svg'
import Edit from '../../../../../public/images/pencil-square.svg'
import Options from '../../../../../public/images/three-dots-vertical.svg'
import { useState } from 'react'
import styles from './OtionButton.module.css'

export const OptionButton = () =>{
    const [active, setActive] = useState<boolean>(false);
    const [isWork, setIsWork] = useState<boolean>(false);

    const handleOptionsClick = () =>{
        setActive(!active)
    }

    return(
        <div className={styles.container}>
            <Options 
            style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
            onClick={handleOptionsClick}
            />
            {
                active ?
                <OptionsList/>
                :
                null
            }
        </div>
    )
}

//옵션 : 추가, 수정, 삭제
const OptionsList = () => {
    return(
        <ul className={`${styles.col} ${styles.list}`}>
            <li className={`${styles.row}`}>
                <Add 
                style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                />
                <span className={`${styles.text}`}>
                    추가
                </span>
            </li>
            <li className={`${styles.row}`}>
                <Edit
                style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                />
                <span className={`${styles.text}`}>
                    수정
                </span>
            </li>
            <li className={`${styles.row}`}>
                <Delete
                style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                />
                <span className={`${styles.text}`}>
                    삭제
                </span>
            </li>
        </ul>
    )
}