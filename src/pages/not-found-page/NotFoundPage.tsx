import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';



function NotFoundPage() {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundCard}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.errorTitle}>Página no encontrada</h2>
                <p className={styles.errorMessage}>
                    Lo sentimos, parece que te has perdido. La página que buscas no existe o ha sido movida.
                </p>
                <Link to="/" className={styles.backButton}>
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;