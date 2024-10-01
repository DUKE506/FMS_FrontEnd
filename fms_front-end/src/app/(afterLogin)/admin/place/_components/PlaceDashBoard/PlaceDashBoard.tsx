import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";
import { AnalysisCard, SummaryCard } from "../Card/AnalysislCard";
import styles from './PlaceDashBoard.module.css'

interface InfomationProp {
    title: string,
    value: number,
}

const mockupData: InfomationProp[] = [
    {
        title: '건물',
        value: 3,
    },
    {
        title: '직원',
        value: 14,
    },
    {
        title: '담당 매니저',
        value: 4,
    },
    {
        title: '관리 자재',
        value: 412,
    },
    {
        title: '관리 자재 금액',
        value: 40054000
    },
    {
        title: '빌생 민원',
        value: 54,
    },

]

const PlaceDashBoard = () => {

    return (
        <>
            <BaseContainer header={
                <BaseHeader title="A사업장" />
            }>
                <div className={styles.container}>
                    {
                        mockupData.map((value, idx) => {
                            return (
                                <div className={styles.box}>
                                    <SummaryCard value={value.value} title={value.title} />
                                </div>
                            )
                        })
                    }
                </div>
            </BaseContainer>
        </>
    )
};

export default PlaceDashBoard;