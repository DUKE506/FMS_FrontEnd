
import Button from '@/components/Button/Button';
import styles from './Panel.module.css'

interface Panel {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Panel = ({ state, setState }: Panel) => {
    //구조
    /**
     * 컨테이너 - [오른쪽 왼쪽]
     * state false = sign in -> sign up button
     * state true = sign up -> sign in button
     */

    //패널 상태 변경
    const OnChangeState = () => {
        setState(prevState => {
            return !prevState
        })
    }

    return (
        <div className={styles.overlay_container}>
            <div className={styles.overlay}>
                <div className={`${styles.panel} ${styles.left_panel} ${state ? styles.active_right : ''}`}>
                    <span className={styles.title}>
                        Sign In
                    </span>
                    <Button
                        label='Sign In'
                        onClick={OnChangeState}
                    />
                </div>
                <div className={`${styles.panel} ${styles.right_panel} ${!state ? styles.active_left : ''}`}>
                    <span className={styles.title}>
                        Sign Up
                    </span>
                    <Button
                        label='Sign Up'
                        onClick={OnChangeState}
                    />
                </div>
            </div>
        </div>
    )
}

export default Panel;