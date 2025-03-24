import { ReactNode } from "react";

/**
 * Interface representing the properties for a custom navigation bar component.
 *
 * @property children - Optional ReactNode elements to be rendered as children within the navigation bar.
 */
export interface CustomNavbarProps {
	children?: ReactNode;
}

/**
 * Represents the properties for a dropdown menu item in the custom navigation bar.
 *
 * @property linkTo - The URL or path the dropdown menu item links to.
 * @property title - The display text for the dropdown menu item.
 */
export interface DropdownMenuProps {
	linkTo: string;
	title: string;
}