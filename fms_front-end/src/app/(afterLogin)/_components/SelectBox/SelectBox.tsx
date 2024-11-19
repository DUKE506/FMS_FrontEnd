import { useEffect, useState } from "react"



export interface SelectDataProps{
    id:number;
    name:string;
}

interface SelectProps{
    label? : string;
    data : SelectDataProps[];
    select : React.Dispatch<React.SetStateAction<SelectDataProps>>;
}

const Select = ({label, data, select}:SelectProps) => {
    const [selected, setSelected] = useState<SelectDataProps>({
        id:data[0]?.id,
        name : data[0]?.name
    })

    useEffect(()=>{
        
    },[])

    //선택 함수
    const handleSelect = (item : SelectDataProps) => {
        setSelected(item)
    }
    return(
        <div>
            {
                label ?
                <div>
                    {label}
                </div>
                :
                null
            }
            <label>
                {selected.name}
            </label>
            <ul>
                {
                    data.map((item, idx) => {
                        return(
                            <li key={item.name+idx} onClick={()=>handleSelect(item)}>
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