import React from 'react'
import { Magnifier, Add } from './styles'
import { Container, Input } from '../shared/shared.styles'
import { Actions } from '../../../../store/ducks/search'

export function AddFavorite() {
  const { toggleSearch } = Actions()

  return (
    <Container>
      <Magnifier onClick={() => toggleSearch(true)} />
      <Add />

      <Input placeholder="Filter by Tag" />
    </Container>
  )
}
