import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CustomNavbar from "../../commons/navbar/CustomBar";
import Modal from "../../components/Modal"; // Importamos la ventana modal
import styles from './style.module.css';

interface LabProps {
    id: string;
    name: string;
    capacity: number;
    resources?: string[];
    schedule?: {
        [day: string]: {
            startTime: string;
            endTime: string;
        };
    };
}

const CreateBooking = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [lab, setLab] = useState<LabProps | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false); // Estado para mostrar la modal

    const queryParams = new URLSearchParams(location.search);
    const selectedDay = queryParams.get("day") || "Lunes"; // Si no hay día, usa "Lunes"

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1.0/laboratories/${id}`)
            .then(response => response.json())
            .then(data => setLab(data))
            .catch(error => console.error("Error al obtener detalles del laboratorio:", error));
    }, [id]);

    const handleReservation = async () => {
        if (!lab) return;

        setLoading(true);
        setMessage("");

        const reservationData = {
            id: "", // Dejar vacío para que el backend genere uno
            name: `Reserva de ${lab.name}`,
            laboratory: { id: lab.id, name: lab.name },
            date: new Date().toISOString().split("T")[0],
            startTime: lab.schedule?.[selectedDay]?.startTime || "08:00",
            endTime: lab.schedule?.[selectedDay]?.endTime || "18:00",
            user: {
                id: "000000",
                username: "desconocido",
                email: "desconocido@example.com",
                lastLogin: null,
                creationDate: new Date().toISOString().split("T")[0],
                role: "USER"
            },
            priority: 1
        };

        try {
            const response = await fetch("http://localhost:8080/api/v1.0/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reservationData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error en la reserva: ${errorText}`);
            }

            setMessage("Reserva creada con éxito ✅");
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            setMessage(`Error al crear la reserva ❌: ${errorMessage}`);
        } finally {
            setLoading(false);
            setShowModal(true); // Mostramos la modal con el mensaje
        }
    };

    const handleNavigateToMenu = () => navigate("/student/home"); 
    const handleNavigateBack = () => navigate(-1);

    if (!lab) {
        return <p>Cargando...</p>;
    }

    return (
        <CustomNavbar>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.title}>Reservar Laboratorio</h2>
                    <p><strong>Nombre:</strong> {lab.name}</p>
                    <p><strong>Día seleccionado:</strong> {selectedDay}</p>
                    <p><strong>Capacidad:</strong> {lab.capacity} personas</p>
                    <p><strong>Equipos:</strong> {lab.resources?.join(", ") || "Sin equipos"}</p>
                    
                    <button 
                        className={styles.buttonSecondary} 
                        onClick={handleNavigateBack}
                    >
                        Volver
                    </button>

                    <button 
                        className={styles.button} 
                        onClick={handleReservation}
                        disabled={loading}
                    >
                        {loading ? "Reservando..." : "Reservar"}
                    </button>

                    {/* Mostrar modal si se hizo la reserva */}
                    {showModal && (
                        <Modal 
                            message={message} 
                            onClose={handleNavigateBack} 
                            onNavigate={handleNavigateToMenu} 
                        />
                    )}

                </main>
            </div>
        </CustomNavbar>
    );
};

export default CreateBooking;
