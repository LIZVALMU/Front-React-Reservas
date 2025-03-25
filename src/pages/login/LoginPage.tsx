import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate(); // React Router

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login attempt:', { username, password });

        if (username && password) {
            navigate('/student/home'); // Usa navigate en lugar de window.location.href
        } else {
            alert('Por favor ingresa tus credenciales');
        }
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
                            Iniciar sesión
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