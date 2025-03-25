import React from 'react';
import { Link } from 'react-router-dom';
import CustomNavbar from "../../commons/navbar/CustomBar";

import styles from './style.module.css';

const MyBookings = () => {
    return (
      <CustomNavbar>
        <h2 className={styles.sectionTitle}>Mis Reservas</h2>
        <p>Aquí se mostrarán las reservas realizadas.</p>
      </CustomNavbar>
    );
  };
  
  export default MyBookings;