import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FavoritesList } from "../../components/favorite-list/Favorite-list";
import { Header } from "../../components/header/Header";
import { Content, Container, Title, Logo } from "./styles";
import logo from '../../assets/SVG/logo.svg'

export function Home() {
  return (
    <Container>
      <Logo />
      <Content>
        <Header />
        <FavoritesList />
      </Content>
    </Container>
  );
}
