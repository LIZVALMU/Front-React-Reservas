/*import React from 'react';
import { Link } from 'react-router-dom';
import CustomNavbar from "../../commons/navbar/CustomBar";

import styles from './style.module.css';

const CreateBooking = () => {
    return (
      <CustomNavbar>
        <h2 className={styles.sectionTitle}>Crear Reserva</h2>
        <p>Formulario para crear una nueva reserva.</p>
      </CustomNavbar>
    );
  };
  
  export default CreateBooking;*/

  import React, { useState } from "react";
  import { useParams, useNavigate } from "react-router-dom";
  import styles from './style.module.css';
  import CustomNavbar from "../../commons/navbar/CustomBar";
  
  const ReservaForm = () => {
      const { id } = useParams(); // Obtiene el ID del laboratorio desde la URL
      const navigate = useNavigate();
      
      const [date, setDate] = useState("");
      const [startTime, setStartTime] = useState("");
      const [endTime, setEndTime] = useState("");
  
      const makeReservation = () => {
          if (!date || !startTime || !endTime) {
              alert("Por favor, complete todos los campos antes de reservar.");
              return;
          }
  
          fetch("http://localhost:8080/api/v1.0/bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  name: "Reserva generada mediante el sistema de reserva",
                  laboratory: { id }, // Usa el ID dinámico
                  date,
                  startTime: `${startTime}:00`,
                  endTime: `${endTime}:00`
              })
          })
          .then(response => response.json())
          .then(() => {
              alert("Reserva realizada con éxito");
              navigate("/crear-reserva"); // Redirige a la lista de laboratorios
          })
          .catch(error => console.error("Error en la reserva:", error));
      };
  
      return (
          <CustomNavbar>
              <h2 className={styles.sectionTitle}>Reserva tu laboratorio:</h2>
              <div className={styles.cardsContainer}>
                  <div className={styles.card}>
                      <div className={styles.cardImage} style={{ backgroundImage: "url('/path-to-lab-image.jpg')" }}></div>
                      <div className={styles.cardTitle}>LABORATORIO {id}</div>
                      <div className="flex flex-col items-center p-4">
                          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 m-2" />
                          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="border p-2 m-2" />
                          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="border p-2 m-2" />
                          <button onClick={makeReservation} className="border p-2 m-2 bg-white cursor-pointer">RESERVAR</button>
                          <button onClick={() => navigate("/crear-reserva")} className="border p-2 m-2 bg-white cursor-pointer">Cancelar</button>
                      </div>
                  </div>
              </div>
          </CustomNavbar>
      );
  };
  
  export default ReservaForm;
  