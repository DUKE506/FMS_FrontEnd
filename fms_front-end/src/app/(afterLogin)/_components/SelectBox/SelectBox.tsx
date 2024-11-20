import { useEffect, useState } from "react"
import styles from './SelectBox.module.css'
import LucideIcon from "../LucideIcon/LucideIcon";


export interface SelectDataProps{
    id:number;
    name:string;
}

interface SelectProps{
    label? : string;
    data : SelectDataProps[];
    onSelect : (id:number)=>void;
    select? : SelectDataProps;
}

const Select = ({label, data, onSelect,select}:SelectProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<SelectDataProps>({
        id:0,
        name : ''
    })

    useEffect(()=>{
        setSelected(select??data[0])
    },[data])

    //선택 함수
    const handleSelect = (item : SelectDataProps) => {
        setSelected(item)
        onSelect(item.id);
    }

    const handleOpen = () => {
        setOpen(!open)
    }
    return(
        <div className={`${styles.select}`} onClick={handleOpen}>
            {
                label ?
                <label className={`${styles.label}`}>
                    {label}
                </label>
                :
                null
            }
            <div className={`${styles.display} ${styles.row} ${open ? styles.focus : null}`}>
                <span className={`${styles.text}`}>
                    {selected?.name}
                </span>
                <span className={`${styles.icon} ${open ? styles.reverse : null}`}>
                    <LucideIcon name='ChevronDown'strokeWidth={3}/>
                </span>
            </div>
            
            <ul className={`${styles.ul} ${open ? styles.open : null}`}>
                {
                    data.map((item, idx) => {
                        return(
                            <li className={`${styles.li}`} key={item.name+idx} onClick={()=>handleSelect(item)}>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Select