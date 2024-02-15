import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";
import styles from "../css/PlayerCard.css";


export default function PlayerCard({ player }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePlayer(player.id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <figure>
        <img
          className={styles.img}
          src={player.imageUrl}
          alt="A pic of a furry player"
        />
        <figcaption>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
        </figcaption>
      </figure>
      <button onClick={handleDelete}>Delete Player</button>
    </div>
  );
}