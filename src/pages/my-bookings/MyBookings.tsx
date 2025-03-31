import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../../commons/navbar/CustomBar";
import styles from './style.module.css';

interface Booking {
    id: string;
    name: string;
    laboratory: {
        id: string;
        name: string;
    };
    date: string;
    startTime: string;
    endTime: string;
    user: {
        id: string;
        name: string;
    };
}

const MyBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:8080/api/v1.0/bookings")
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Error HTTP: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              setBookings(data);
              setLoading(false);
          })
          .catch(error => {
              console.error("Error al obtener las reservas:", error);
              setLoading(false);
          });
  }, []);

    if (loading) {
        return <p className={styles.loading}>Cargando reservas...</p>;
    }

    return (
        <CustomNavbar>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2 className={styles.title}>Reservas Realizadas</h2>

                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>Laboratorio</th>
                                    <th className={styles.th}>Fecha</th>
                                    <th className={styles.th}>Horario</th>
                                    <th className={styles.th}>Usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.length > 0 ? (
                                    bookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td className={styles.td}>{booking.laboratory.name}</td>
                                            <td className={styles.td}>{booking.date}</td>
                                            <td className={styles.td}>{booking.startTime} - {booking.endTime}</td>
                                            <td className={styles.td}>{booking.user.name}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className={styles.td} colSpan={4}>No hay reservas registradas.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <button 
                        className={styles.buttonSecondary} 
                        onClick={() => navigate("/student/home")}
                    >
                        Volver al menú principal
                    </button>

                </main>
            </div>
        </CustomNavbar>
    );
};

export default MyBookings;
