import Button2 from "@/components/Button2/Button2";
import { ReactNode } from "react";
import styles from './Modal.module.css'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base";

interface ModalProps {
    title: string;
    children: ReactNode;
    onCancel: () => void;
}


export const Modal = ({
    title,
    children,
    onCancel
}: ModalProps) => {
    return (
        <div className={` ${styles.modal}`}>
            <BaseContainer
                header={
                    <BaseHeader title={title} />
                }
            >
                <div className={`${styles.col} ${styles.hidden}`}>
                    <div className={`${styles.hidden} ${styles.col}`}>
                        {children}
                    </div>
                    <div className={styles.row}>
                        <Button2 label="추가" />
                        <Button2 label="취소" onClick={onCancel} color="red" />
                    </div>
                </div >
            </BaseContainer>

        </div>
    )
}