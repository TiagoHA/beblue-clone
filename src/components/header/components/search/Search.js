import React from 'react'
import { Magnifier, Add } from './styles'
import { Container, Input } from '../shared/shared.styles'
import { Actions } from '../../../../store/ducks/search'

export function Search() {
  const { toggleSearch } = Actions()

  return (
    <Container>
      <Magnifier onClick={() => toggleSearch(false)} />
      <Add />

      <Input placeholder="Title" />
      <Input placeholder="Link" />
      <Input placeholder="Tags" />
    </Container>
  )
}
