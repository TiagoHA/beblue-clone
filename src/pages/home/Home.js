import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FavoritesList } from "../../components/favorite-list/Favorite-list";
import { Search } from "../../components/search/Search";
import { Content, Container, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <Title>Title</Title>
      <Content>
        <Search />
        <FavoritesList />
      </Content>
    </Container>
  );
}
