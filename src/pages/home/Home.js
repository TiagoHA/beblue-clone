import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FavoritesList } from "../../components/favorite-list/Favorite-list";
import { Search } from "../../components/search/Search";
import { Content, Container, Title, Logo } from "./styles";
import logo from '../../assets/SVG/logo.svg'

export function Home() {
  return (
    <Container>
      <Logo />
      <Content>
        <Search />
        <FavoritesList />
      </Content>
    </Container>
  );
}
