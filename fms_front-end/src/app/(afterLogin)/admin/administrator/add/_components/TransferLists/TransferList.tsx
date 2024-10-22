import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './TransferList.module.css'

export interface TransferItem {
    id : number;
    name : string;
    subName? : string;

}

export const TransferListContainer = ({datas, title1, title2} :{ datas : TransferItem[] ;title1:string; title2:string}) => {

    return(
        
        <div className={Styles.row}>
            <List datas={datas} title={title1}/>
            <List title={title2}/>
        </div>
    )
}


const List = ({datas, title } : { datas? :TransferItem[]; title : string}) => {
    return(
        <>
        <BaseContainer
        header={
            <BaseHeader title={title}/>
        }
        >
            <ul className={Styles.list_wrap}>
            {
                datas?.map((data, idx)=>{
                    return(
                        <li 
                        className={Styles.item}
                        key={data.name+idx} >
                            <input type="checkbox"/>
                            <div className={Styles.display}>
                                <span className={Styles.text}>
                                    {data.name}
                                </span>
                                <span className={Styles.sub_text}>
                                    {data.subName}
                                </span>
                            </div>
                            
                        </li>
                    )
                })
            }
            </ul>
        
        </BaseContainer>
        </>
    )
}