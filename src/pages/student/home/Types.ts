/**
 * Interface representing the properties for the CardsContainer component.
 *
 * @property {string} link - The URL or path the card should navigate to when clicked.
 * @property {string} image - The source URL of the image to be displayed on the card.
 * @property {string} title - The title or heading text to be displayed on the card.
 */
export interface CardsContainerProps {
    link: string;
    image: string;
    title: string;
  }