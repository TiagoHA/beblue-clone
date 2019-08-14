import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FavoritesList } from '../../components/favorite-list/Favorite-list'
import { Filter } from '../../components/filter/Filter'
import { Content, Container, Title } from './styles';

export function Home() {
  return (
    <Container>
      <Title>BEBLUE</Title>
      <Content>
        <Filter />
        <FavoritesList />
      </Content>
    </Container>
  )
}
