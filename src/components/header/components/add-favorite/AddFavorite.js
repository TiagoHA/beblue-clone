import React from 'react'
import { Magnifier, Add } from './styles'
import { Container, Input } from '../shared/shared.styles'

export function AddFavorite({ changeVisible }) {
  return (
    <Container>
      <Magnifier onClick={changeVisible} />
      <Add />

      <Input placeholder="Filter by Tag" />
    </Container>
  )
}
