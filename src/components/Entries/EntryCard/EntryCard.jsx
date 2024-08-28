import { AddToFavoritesButton } from "@/components";
import "./EntryCard.css";

const EntryCard = () => {
  return (
    <li className="entryCard">
      <AddToFavoritesButton />
      <strong>FEB 28, 2024</strong>
      <h3>Some entrie title or headline</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum,
        voluptates alias, saepe nemo assumenda quia nostrum laborum quisquam et
        quo qui adipisci repudiandae aspernatur libero consequuntur quos quas.
        Ea.
      </p>
    </li>
  );
};

export default EntryCard;
