import React from "react";
import { Actions } from "../../../../store/ducks/favorites";
import Del from "../../../../assets/SVG/X.svg";
import { TagContainer, ButtonDelete } from "./styles";
import styled from "styled-components";

export function TagsList({ tags, id }) {
  return (
    <TagContainer>
      {tags.map(tag => (
        <Tag key={String(id)} tag={tag} id={id} />
      ))}
    </TagContainer>
  );
}

export function Tag({ id, tag }) {
  const { deleteTag } = Actions();

  return (
    <ButtonDelete>
      <p>{tag}</p>
      <button onClick={() => deleteTag({ id, tag })}>
        <img src={Del} alt="delete" />
      </button>
    </ButtonDelete>
  );
}
