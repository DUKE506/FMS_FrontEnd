import Add from '../../../../../public/images/plus-lg.svg'
import Delete from '../../../../../public/images/trash.svg'
import Edit from '../../../../../public/images/pencil-square.svg'
import Options from '../../../../../public/images/three-dots-vertical.svg'
import { useState } from 'react'


export const OptionButton = () =>{
    const [active, setActive] = useState<boolean>(false);
    const [isWork, setIsWork] = useState<boolean>(false);
    return(
        <div>
            <Options 
            style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
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
        <ul>
            <li>
                <Add/>
            </li>
            <li>
                <Edit/>
            </li>
            <li>
                <Delete/>
            </li>
        </ul>
    )
}