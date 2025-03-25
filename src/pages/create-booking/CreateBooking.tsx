import React from 'react';
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
  
  export default CreateBooking;