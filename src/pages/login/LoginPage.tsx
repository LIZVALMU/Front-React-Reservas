import React, { useState } from 'react';
import styles from './styles.module.css';
import InputField from './components/InputField';

const Title = () => (
    <h1 className={styles.loginTitle}>Reserva de Laboratorios</h1>
);

const CredentialsContentText = () => (
    <p className={styles.loginSubtitle}>Ingresa tus credenciales para comenzar</p>
);

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login attempt:', { username, password });

        window.location.href = '/student/home';

    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <Title />
                <CredentialsContentText />
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <InputField
                        id="username"
                        label="Usuario"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        id="password"
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.loginButton}>
                        <a href="/student/home" className={styles.loginButtonLink}>
                            Iniciar Sesión
                        </a>
                    </button>
                </form>
                <div className={styles.additionalLinks}>
                    <a href="#" className={styles.forgotPassword}>
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;