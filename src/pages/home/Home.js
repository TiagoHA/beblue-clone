import React from 'react'
import { FavoritesList } from './components/favorite-list/Favorite-list'
import { Header } from './components/header/Header'
import { Content, Container, Logo } from './styles'

export function Home() {
  return (
    <Container>
      <Logo />
      <Content>
        <Header />
        <FavoritesList />
      </Content>
    </Container>
  )
}
