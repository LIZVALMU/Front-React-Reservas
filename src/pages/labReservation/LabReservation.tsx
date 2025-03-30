import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../commons/navbar/CustomBar"; // Se usa CustomNavbar
import styles from './style.module.css';

interface SalonProps {
    id: string;
    capacity: number;
    resources?: string[];
    schedule?: {
        [day: string]: {
            startTime: string;
            endTime: string;
        };
    };
}

const LabReservation = () => {
    const [salones, setSalones] = useState<SalonProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/v1.0/laboratories/all")
            .then(response => response.json())
            .then(data => setSalones(data))
            .catch(error => console.error("Error al obtener los laboratorios:", error));
    }, []);

    const diaHoy = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
    const diaCapitalizado = diaHoy.charAt(0).toUpperCase() + diaHoy.slice(1);

    return (
        <CustomNavbar>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.title}>SALONES DISPONIBLES</h2>
                    
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>ID</th>
                                    <th className={styles.th}>Disponibilidad</th>
                                    <th className={styles.th}>Capacidad</th>
                                    <th className={styles.th}>Equipos</th>
                                    <th className={styles.th}>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salones.map((salon) => {
                                    const disponibilidad = salon.schedule?.[diaCapitalizado]
                                        ? `${salon.schedule[diaCapitalizado].startTime} - ${salon.schedule[diaCapitalizado].endTime}`
                                        : "No disponible";

                                    const equipos = salon.resources?.length ? salon.resources.join(", ") : "Sin equipos";

                                    return (
                                        <tr key={salon.id}>
                                            <td className={styles.td}>{salon.id}</td>
                                            <td className={styles.td}>{disponibilidad}</td>
                                            <td className={styles.td}>{salon.capacity}</td>
                                            <td className={styles.td}>{equipos}</td>
                                            <td className={styles.td}>
                                                <button 
                                                    className={styles.button}
                                                    onClick={() => navigate(`/CreateBooking/${salon.id}`)}>
                                                    Reservar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    
                    <p className={styles.footer}>&copy; 2025 Sistema de Reservas</p>
                </main>
            </div>
        </CustomNavbar>
    );
};

export default LabReservation;