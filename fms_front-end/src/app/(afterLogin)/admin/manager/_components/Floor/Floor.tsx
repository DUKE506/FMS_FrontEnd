import { BaseContainer } from "@/components/BaseContainer/Base"



export interface FloorProps {
    id : number,
    title : string,
}



export const FloorContainer = ({floorlist} : {floorlist : FloorProps[]}) =>{
    return(
        <>
        <BaseContainer>
        {
            floorlist.map((floor, idx) =>{
                return(
                    <Floor 
                        key={floor.title+idx}
                        floor={floor}
                    />
                )
            })
        }
        </BaseContainer>
        </>
    )
}


const Floor = ({floor} : {floor : FloorProps}) => {
    return(
        <>
        <div>
            {floor.title}
        </div>
        </>
    )
}