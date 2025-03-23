import React, { useState, ReactNode } from 'react';
import styles from './style.module.css'; // Asegúrate de que el nombre del archivo CSS coincida

interface CustomNavbarProps {
  children?: ReactNode; // Permitimos que el componente acepte hijos
}

function CustomNavbar({ children }: CustomNavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <div className={styles.navbarTitle}>
            Dashboard
          </div>

          <div className={styles.userMenu}>
            <button
              className={styles.userButton}
              onClick={toggleDropdown}
            >
              Usuario
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <a href="/profile" className={styles.dropdownItem}>
                  Perfil
                </a>
                <a href="/settings" className={styles.dropdownItem}>
                  Configuración
                </a>
                <a href="/logout" className={styles.dropdownItem}>
                  Cerrar Sesión
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className={styles.mainContent}>
        {children} {/* Renderizamos el contenido envuelto */}
      </main>
    </>
  );
}

export default CustomNavbar;