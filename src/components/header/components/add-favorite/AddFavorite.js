import React from 'react'
import { Magnifier, Add } from './styles'
import { Container, Icons } from '../shared/shared.styles'
import { Actions } from '../../../../store/ducks/search'
import { Actions as FavoriteActions } from '../../../../store/ducks/favorites'
import { FavoriteForm } from './components/Form/Form'

export function AddFavorite() {
  const { toggleSearch } = Actions()
  const { addFavorite } = FavoriteActions()

  return (
    <Container>
      <Icons>
        <Magnifier onClick={() => toggleSearch(true)} />
        <Add />
      </Icons>

      <FavoriteForm onSubmit={addFavorite} />
    </Container>
  )
}
