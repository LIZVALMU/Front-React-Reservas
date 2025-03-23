import CustomNavbar from "../../../commons/navbar/CustomBar"; // Asegúrate de que la ruta sea correcta
import styles from './style.module.css'; // Nuevo archivo CSS para HomeStudent

function HomeStudent() {
  return (
    <CustomNavbar>
      <h2 className={styles.sectionTitle}>¿Qué Acción Deseas Realizar?</h2>
      <div className={styles.cardsContainer}>
        <a href="/mis-reservas" className={styles.card}>
          <div className={styles.cardImage} style={{ backgroundImage: 'url(/images/fondologin.png)' }}></div>
          <h3 className={styles.cardTitle}>Mis Reservas</h3>
        </a>
        <img src="/images/my-bookings.jpg" alt="Fondo" />
        <a href="/crear-reserva" className={styles.card}>
          <div className={styles.cardImage} style={{ backgroundImage: 'url(/images/)' }}></div>
          <h3 className={styles.cardTitle}>Crear Reserva</h3>
        </a>
      </div>
    </CustomNavbar>
  );
}

export default HomeStudent;