import React from 'react'
import { Magnifier, Add } from './styles'
import { Container } from '../shared/shared.styles'
import { Actions } from '../../../../store/ducks/search'
import { Actions as FavoriteActions } from '../../../../store/ducks/favorites'
import { FavoriteForm } from './components/Form/Form'

export function AddFavorite() {
  const { toggleSearch } = Actions()
  const { addFavorite } = FavoriteActions()

  return (
    <Container>
      <Magnifier onClick={() => toggleSearch(true)} />
      <Add />

      <FavoriteForm onSubmit={addFavorite} />
    </Container>
  )
}
