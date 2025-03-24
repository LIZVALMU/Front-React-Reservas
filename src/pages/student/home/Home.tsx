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
    {link: "/mis-reservas", image: "/images/CrearReserva.jpg", title: "Mis Reservas"},
    {link: "/crear-reserva", image: "/images/MiReservas.jpg", title: "Crear Reserva"},
  ];

  return (
    <CustomNavbar>
      <h2 className={styles.sectionTitle}>¿Qué Acción Deseas Realizar?</h2>
      <div className={styles.cardsContainer}>
        {menuItems.map((item, index) => (
          <CardsContainer
            key={index}
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