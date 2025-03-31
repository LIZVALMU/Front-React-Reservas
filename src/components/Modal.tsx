import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
    message: string;
    onClose: () => void;
    onNavigate: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose, onNavigate }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h3>Resultado de la Reserva</h3>
                <p>{message}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={onNavigate}>Volver al menú</button>
                    <button className={styles.buttonSecondary} onClick={onClose}>Seguir reservando</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
