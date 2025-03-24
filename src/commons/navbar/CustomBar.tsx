import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import { CustomNavbarProps, DropdownMenuProps } from "./TypesCustomBar";

/**
 * A functional component that renders a dropdown menu item as a link.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.linkTo - The URL to which the dropdown item should link.
 * @param {string} props.title - The text to display for the dropdown item.
 * @returns {JSX.Element} A styled anchor element representing the dropdown menu item.
 */
const DropdownMenu = ({ linkTo, title }: DropdownMenuProps) => {
	return (
		<a href={linkTo} className={styles.dropdownItem}>
			{title}
		</a>
	);
};

function CustomNavbar({ children }: CustomNavbarProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [userName, setUserName] = useState('');

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		};
		const fetchUserName = async () => {
			//TODO: Fetch user name from the server
			setUserName("Usuario");
		};
		fetchUserName();
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const menuItems = [
		{ linkTo: "/profile", title: "Perfil" },
		{ linkTo: "/settings", title: "Configuración" },
		{ linkTo: "/logout", title: "Cerrar Sesión" },
	];

	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<div className={styles.navbarContent}>
					<div className={styles.navbarTitle}>Dashboard</div>
					<div className={styles.userMenu} ref={dropdownRef}>
						<button className={styles.userButton} onClick={toggleDropdown}>
							{userName}
						</button>
						{isDropdownOpen && (
							<div className={styles.dropdownMenu}>
								{menuItems.map((item) => (
									<DropdownMenu key={item.linkTo} {...item} />
								))}
							</div>
						)}
					</div>
				</div>
			</nav>

			<main className={styles.mainContent}>{children}</main>
		</div>
	);
}

export default CustomNavbar;
