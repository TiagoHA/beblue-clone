import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Link, Name } from "./styles";
import { Actions } from "../../store/ducks/favorites";
import { DeleteFavorite } from "./components/delete-favorite/DeleteFavorite";
import { TagsList } from "./components/tag/Tag";

export function FavoritesList() {
  const { favorites } = useSelector(state => state.favoritesStore);

  return favorites.map(favorite => <FavoriteTile key={favorite.id} {...favorite} />);
}

function FavoriteTile({ id, name, link, tags }) {
  const { deleteFavorite } = Actions();

  return (
    <Container>
      <Col full>
        <Name>{name}</Name>
        <Link href={link}>{link}</Link>
        <TagsList id={id} tags={tags} />
      </Col>
      <Col>
        <DeleteFavorite id={id} />
      </Col>
    </Container>
  );
}
