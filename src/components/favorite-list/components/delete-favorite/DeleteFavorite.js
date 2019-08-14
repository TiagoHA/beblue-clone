import React from "react";
import { Actions } from "../../../../store/ducks/favorites";
import Trash from "../../../../assets/SVG/Trash.svg";
import { ButtonDelete } from "./styles";

export function DeleteFavorite({ id }) {
  const { deleteFavorite } = Actions();

  return (
    <ButtonDelete onClick={() => deleteFavorite(id)}>
      <img src={Trash} alt="trash" />
      <p>DELETE</p>
    </ButtonDelete>
  );
}
