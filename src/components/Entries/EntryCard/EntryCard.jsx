import { AddToFavoritesButton } from "@/components";
import "./EntryCard.css";

const EntryCard = ({ card }) => {
  const { date, motto, notes } = card;
  return (
    <li className="entryCard">
      <AddToFavoritesButton />
      <strong>{date}</strong>
      <h3>{motto}</h3>
      <p>{notes}</p>
    </li>
  );
};

export default EntryCard;
