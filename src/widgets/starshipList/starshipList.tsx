import React from "react";
import { Starship } from "../../shared/types/StarshipType";
import s from './StarshipList.module.scss'

interface Props {
  starships: Starship[];
}

const StarshipList: React.FC<Props> = ({ starships }) => (
  <div className={s.starshipBlock}>
    <ul className={s.starshipList} >
      {starships.map((starship, index) => (
        <li key={index} className={s.starshipList}>
          <strong>Name:</strong> {starship.name} <br />
          <strong>Model:</strong> {starship.model}
        </li>
      ))}
    </ul>
  </div>
);

export default StarshipList;
