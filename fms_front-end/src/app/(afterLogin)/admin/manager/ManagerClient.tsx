import { FloorContainer, FloorProps } from "./_components/Floor/Floor";


const floorMockUp: FloorProps[] = [
    {
        id : 1,
        title : '1층'
    },
    {
        id : 2,
        title : '2층'
    },
    {
        id : 3,
        title : '3층'
    },
    {
        id : 4,
        title : '4층'
    },
    {
        id : 5,
        title : '5층'
    },
    {
        id : 6,
        title : '6층'
    },
    {
        id : 7,
        title : '7층'
    },
    {
        id : 8,
        title : '8층'
    },
]


const ManagerClient = () => {
    return(
        <>
            <FloorContainer floorlist={floorMockUp}/>
        </>
    )
}



export default ManagerClient;