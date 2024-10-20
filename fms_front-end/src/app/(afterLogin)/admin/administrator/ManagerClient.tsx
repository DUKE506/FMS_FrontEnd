import { GroupContainer, GroupProps } from "./_components/Group/Group";
import { MemberContainer, MemberProps } from "./_components/Member/Member";
import Styles from './page.module.css'

const groupMockUp: GroupProps[] = [
    {
        id: 1,
        title: '부서1'
    },
    {
        id: 2,
        title: '부서2'
    },
    {
        id: 3,
        title: '부서3'
    },
    {
        id: 4,
        title: '부서4'
    },
    {
        id: 5,
        title: '부서5'
    },
    {
        id: 6,
        title: '부서6'
    },
    {
        id: 7,
        title: '부서7'
    },
]

const memberMockUp: MemberProps[] = [
    {
        id: 1,
        name: '이동희',
        group: '부서1',
    },
    {
        id: 2,
        name: '강영석',
        group: '부서1',
    },
    {
        id: 3,
        name: '김성규',
        group: '부서2',
    },
    {
        id: 4,
        name: '차준오',
        group: '부서1',
    },
    {
        id: 5,
        name: '김준현',
        group: '부서2',
    },
]


const ManagerClient = () => {
    return (
        <>
            <div className={Styles.row}>
                <GroupContainer grouplist={groupMockUp} />
                <MemberContainer members={memberMockUp} />
            </div>

        </>
    )
}



export default ManagerClient;