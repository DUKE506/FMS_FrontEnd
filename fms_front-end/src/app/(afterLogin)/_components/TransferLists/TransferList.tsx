import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './TransferList.module.css'
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";

// 컴포넌트 사용방법
// utill가서 transferItem형식으로 변환해서 컴포넌트에 전달하면됨

export interface TransferItem {
    id : number;
    name : string;
    subName? : string;

}

interface TransferListContainerProps {
    datas : TransferItem[];
    title1:string; 
    title2:string
    setState : (data : TransferItem[]) => void;
}

export const TransferListContainer = ({datas, title1, title2, setState} : TransferListContainerProps ) => {
    const [copyList, setCopyList] = useState<TransferItem[]>([]); //전체 원본 복사데이터
    const [selectList, setSelectList] = useState<TransferItem[]>([]); //선택되어진 데이터

    const [checkList, setCheckList] = useState<TransferItem[]>([]); // 전체에서 선택한 데이터
    const [checkedList, setCheckedList] = useState<TransferItem[]>([]); //선택된 곳에서 선택한 데이터
    

    useEffect(()=>{
        setCopyList([...datas])
    },[datas])

    useEffect(()=>{
        setState(selectList) 
    },[selectList])

    //전체 데이터 전송
    const transferAllList = () => {
        setSelectList(prev => [...prev, ...copyList]);
        setCopyList([]);
        setCheckList([]);
    }

    //선택 데이터 전송
    const transferList = () => {
        setSelectList(prev => [...prev, ...checkList]);
        setCopyList(prev => prev.filter(i => !checkList.includes(i)))
        setCheckList([]);
    }

    //선택 데이터 삭제
    const deleteList = () => {
        setCopyList(prev => [...prev, ...checkedList])
        setSelectList(prev => prev.filter(i => !checkedList.includes(i)))
        setCheckedList([]);
    }
    //전체 데이터 전송
    const deleteAllList = () => {
        setCopyList(prev => [...prev, ...selectList]);
        setSelectList([]);
        setCheckedList([]);
    }

    return(
        
        <div className={Styles.row}>
            <List 
            datas={copyList} 
            title={title1} 
            checkList={checkList}

            setCheckList={setCheckList} 
            />

            <div className={Styles.col}>
                <Button label="전체 추가" onClick={transferAllList}/>
                <Button label="추가" onClick={transferList}/>
                <Button label="제거" onClick={deleteList}/>
                <Button label="전체 제거" onClick={deleteAllList}/>
            </div>

            <List 
            datas={selectList} 
            title={title2}  
            checkList={checkedList} 
            
            setCheckList={setCheckedList}/>
        </div>
    )
}

interface ListProps{
    datas?: TransferItem[];
    title: string;
    setCheckList?: React.Dispatch<React.SetStateAction<TransferItem[]>>;
    checkList?: TransferItem[];
}

const List = ({datas, title, setCheckList, checkList} : ListProps) => {
    const checkItem = (item : TransferItem) =>{
        setCheckList?.((prev: TransferItem[]) =>
            prev.some(i => i.id === item.id) 
            ? prev.filter(i => i.id !== item.id) 
            : [...prev, item]
        )
    }

    const handleCheckboxClick= (e : React.MouseEvent<HTMLInputElement>, data : TransferItem) => {
        e.stopPropagation();
        checkItem(data);
    }

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
                    let isCheck = checkList?.some(i => i.id === data.id)
                    return(
                        <li 
                        className={`${Styles.item} ${isCheck ? Styles.active : ''}`}
                        onClick={()=>checkItem(data)}
                        key={data.name+idx} >
                            <input type="checkbox"
                            onClick={(e)=>handleCheckboxClick(e,data)}
                            checked={isCheck}
                            readOnly
                            />
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