import styles from './AnalysisCard.module.css'

interface AnalysisCardProps {
    title: string;
    value: number;
}


export const AnalysisCard = ({ title, value }: AnalysisCardProps) => {
    return (
        <div className={styles.card}>
            <label className={styles.label}>
                {title}
            </label>
            <h1 className={styles.value}>
                {value}
            </h1>
        </div>
    )
}


export const SummaryCard = ({ title, value }: AnalysisCardProps) => {
    return (
        <div className={styles.scard}>
            <label className={styles.slabel}>
                {title}
            </label>
            <h1 className={styles.svalue}>
                {value}
            </h1>
        </div>
    )
}