import React from 'react'
import { Magnifier, Add } from './styles'
import { Container, Input } from '../shared/shared.styles'

export function Search({ changeVisible }) {
  return (
    <Container>
      <Magnifier onClick={changeVisible} />
      <Add />

      <Input placeholder="Title" />
      <Input placeholder="Link" />
      <Input placeholder="Tags" />
    </Container>
  )
}
