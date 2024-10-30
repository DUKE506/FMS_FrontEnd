import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './TransferList.module.css'
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button/Button";
import { ColInput, RowInput } from "../Input/Input";

// 컴포넌트 사용방법
// utill가서 transferItem형식으로 변환해서 컴포넌트에 전달하면됨

export interface TransferItem {
    id : number;
    name : string;
    subName? : string;
}

interface TransferListContainerProps {
    datas : TransferItem[];
    title : string;
    selectDatas? : TransferItem[]; //선택한데이터
    setState : (data : TransferItem[]) => void;
    edit : boolean;
}

export const TransferListContainer = ({datas, selectDatas,title, setState,edit} : TransferListContainerProps ) => {
    const [copyList, setCopyList] = useState<TransferItem[]>([]); //전체 원본 복사데이터
    const [selectList, setSelectList] = useState<TransferItem[]>(selectDatas || []); //선택되어진 데이터

    const [checkList, setCheckList] = useState<TransferItem[]>([]); // 전체에서 선택한 데이터
    const [checkedList, setCheckedList] = useState<TransferItem[]>([]); //선택된 곳에서 선택한 데이터
    
    

    //초기 전체 데이터 세팅
    useEffect(()=>{
        setCopyList([...datas])
    },[datas])

    //현재 서버에 저장된 데이터 초기 세팅
    useEffect(()=>{
        if(selectDatas !== undefined){
            setSelectList([...selectDatas]) 
        }
    },[selectDatas])

    //선택되어있는 데이터가 변경되었을때 동작함
    useEffect(()=>{
        if(JSON.stringify(selectDatas) !== JSON.stringify(selectList)){
            setState(selectList) 
        }
        
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
        <BaseContainer
        header={
            <BaseHeader title={title}/>
        }
        >
            <div className={Styles.row}>
                {
                    edit ? 
                    <>
                        <List 
                            datas={copyList} 
                            checkList={checkList}

                            setCheckList={setCheckList} 
                            />

                        <div className={Styles.col}>
                            <Button label="전체 추가" onClick={transferAllList}/>
                            <Button label="추가" onClick={transferList}/>
                            <Button label="제거" onClick={deleteList}/>
                            <Button label="전체 제거" onClick={deleteAllList}/>
                        </div>
                    </>
                :
                null
                }
                

                <List 
                datas={selectList} 
                checkList={checkedList} 
                
                setCheckList={setCheckedList}/>
            </div>
        </BaseContainer>
    )
}

interface ListProps{
    datas?: TransferItem[];
    // title: string;
    setCheckList?: React.Dispatch<React.SetStateAction<TransferItem[]>>;
    checkList?: TransferItem[];
}

const List = ({datas, setCheckList, checkList} : ListProps) => {
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
        <div className={`${Styles.box} ${Styles.col}`}>
            <ColInput input={{
                type:"text",
                placeholder : "검색",
            }}
            label="검색"
            edit
            />
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
        
        {/* </BaseContainer> */}
        </div>
    )
}