import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../commons/navbar/CustomBar"; // Se usa CustomNavbar
import styles from './style.module.css';

interface LabProps {
    id: string;
    name: string;
    status: string;
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
    const [labs, setLaboratories] = useState<LabProps[]>([]);
    const [selectedDay, setSelectedDay] = useState<string>("Lunes"); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/v1.0/laboratories/all")
            .then(response => response.json())
            .then(data => {
                // Filtrar solo los laboratorios con estado "Activo"
                const activeLabs = data.filter((lab: LabProps) => lab.status === "Activo");
                setLaboratories(activeLabs);
            })
            .catch(error => console.error("Error al obtener los laboratorios:", error));
    }, []);

    return (
        <CustomNavbar>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.title}>LABORATORIOS DISPONIBLES</h2>

                    <div className={styles.selectContainer}>
                        <label htmlFor="daySelect">¿Para cuál día desea reservar?</label>
                        <select
                            id="daySelect"
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value)}
                        >
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miércoles">Miércoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sábado">Sábado</option>
                        </select>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>Nombre</th>
                                    <th className={styles.th}>Estado</th>
                                    <th className={styles.th}>Disponibilidad</th>
                                    <th className={styles.th}>Capacidad</th>
                                    <th className={styles.th}>Equipos</th>
                                    <th className={styles.th}>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {labs.map((lab) => {
                                    const disponibilidad = lab.schedule?.[selectedDay]
                                        ? `${lab.schedule[selectedDay].startTime} - ${lab.schedule[selectedDay].endTime}`
                                        : "No disponible";

                                    const equipos = lab.resources?.length ? lab.resources.join(", ") : "Sin equipos";

                                    const estaDisponible = !!lab.schedule?.[selectedDay];

                                    return (
                                        <tr key={lab.id}>
                                            <td className={styles.td}>{lab.name}</td>
                                            <td className={styles.td}>{lab.status}</td>
                                            <td className={styles.td}>{disponibilidad}</td>
                                            <td className={styles.td}>{lab.capacity}</td>
                                            <td className={styles.td}>{equipos}</td>
                                            <td className={styles.td}>
                                                <button 
                                                    className={styles.button} 
                                                    onClick={() => navigate(`/crear-reserva/${lab.id}?day=${selectedDay}`)}
                                                    disabled={!estaDisponible}
                                                > 
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