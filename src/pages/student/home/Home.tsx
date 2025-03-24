import CustomNavbar from "../../../commons/navbar/CustomBar";
import styles from "./style.module.css";

/**
 * Interface representing the properties for the CardsContainer component.
 *
 * @property {string} link - The URL or path the card should navigate to when clicked.
 * @property {string} image - The source URL of the image to be displayed on the card.
 * @property {string} title - The title or heading text to be displayed on the card.
 */
interface CardsContainerProps {
  link: string;
  image: string;
  title: string;
}

const CardsContainer = ({ link, image, title }: CardsContainerProps) => {
  return (
    <a href={link} className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${image})` }}>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </a>
  );
};

function HomeStudent() {
  return (
    <CustomNavbar>
      <h2 className={styles.sectionTitle}>¿Qué Acción Deseas Realizar?</h2>
      <div className={styles.cardsContainer}>

        <CardsContainer
          link="/mis-reservas"
          image="/images/CrearReserva.jpg"
          title="Mis Reservas"
        />

        <CardsContainer
          link="/crear-reserva"
          image="/images/MiReservas.jpg"
          title="Crear Reserva"
        />

      </div>
    </CustomNavbar>
  );
}

export default HomeStudent;