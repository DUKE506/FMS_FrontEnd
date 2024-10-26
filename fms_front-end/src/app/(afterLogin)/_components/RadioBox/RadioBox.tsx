import { useEffect, useState } from 'react';
import Styles from './RadioBox.module.css'


export interface RadioBoxDataProps {
    name: string;
    explain: string;
    value: string | number;
}

interface RadioBoxProps {
    data: RadioBoxDataProps[],
    layout: string,
    select: (data: RadioBoxDataProps) => void
}

export const RadioBox = ({ data, layout, select }: RadioBoxProps) => {
    const [selectItem, setSelectItem] = useState<RadioBoxDataProps>({
        name: '',
        explain: '',
        value: '',
    });

    useEffect(() => {
        select(selectItem);
    }, [selectItem])

    const onClick = (data: RadioBoxDataProps) => {
        setSelectItem(data);
    }

    return (
        <div className={`${Styles[layout]}`}>
            {
                data.map((item, idx) => {
                    return (
                        <div
                            key={item.name + idx}
                            className={`${Styles.box} ${item.value == selectItem.value ? Styles.active : null} `}
                            onClick={() => onClick(item)}
                        >
                            <div className={Styles.col}>
                                <span className={Styles.title}>
                                    {item.name}
                                </span>
                                <span className={Styles.text}>
                                    {item.explain}
                                </span>
                            </div>
                            <input
                                type="radio"
                                checked={selectItem.value == item.value}
                                readOnly
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}