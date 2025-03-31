import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import InputField from './components/InputField';

const CredentialsContentText = () => (
    <p className={styles.loginSubtitle}>Ingresa tus datos</p>
); 

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        const userData = { username, email, password };

        try {
            const response = await fetch('http://localhost:8080/api/v1.0/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Error al registrar usuario.");

            setSuccess("Registro exitoso. Redirigiendo al login...");
            setTimeout(() => navigate('/login'), 2000);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h1 className={styles.loginTitle}>Registro de Usuario</h1>
                <CredentialsContentText />
                {error && <p className={styles.errorText}>{error}</p>}
                {success && <p className={styles.successText}>{success}</p>}
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <InputField id="username" label="Usuario" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <InputField id="email" label="Correo electrónico" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <InputField id="password" label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputField id="confirmPassword" label="Confirmar contraseña" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit" className={styles.loginButton}>Registrarse</button>
                </form>
                <div className={styles.additionalLinks}>
                    <a href="/login" className={styles.loginLink}
                    >¿Ya tienes cuenta? <strong>Inicia sesión aquí</strong></a>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
