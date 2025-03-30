import CustomNavbar from "../../../commons/navbar/CustomBar";
import styles from "./style.module.css";
import { CardsContainerProps } from "./Types";
import { Link } from "react-router-dom";

const CardsContainer = ({ link, image, title }: CardsContainerProps) => {
  return (
    <Link to={link} className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${image})` }}>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </Link>
  );
};

function HomeStudent() {

  const menuItems = [
    {link: "/mis-reservas", image: "/images/CrearReserva.jpg", title: "Mis reservas"},
    {link: "/crear-reserva", image: "/images/MiReservas.jpg", title: "Crear reserva"},
  ];

  return (
    <CustomNavbar>
      <h2 className={styles.sectionTitle}>¿Qué acción deseas realizar?</h2>
      <div className={styles.cardsContainer}>
        {menuItems.map((item) => (
          <CardsContainer
            key={item.link}
            link={item.link}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </CustomNavbar>
  );
}

export default HomeStudent;