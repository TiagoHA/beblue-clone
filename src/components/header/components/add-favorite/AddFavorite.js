import React from 'react'
import { Magnifier, Add } from './styles'
import { Container, Icons } from '../shared/shared.styles'
import { ActionsCreator } from '../../../../store/ducks/search'
import { ActionsCreator as FavoriteActionsCreator } from '../../../../store/ducks/favorites'
import { FavoriteForm } from './components/Form/Form'

export function AddFavorite() {
  const { toggleSearch } = ActionsCreator()
  const { addFavorite } = FavoriteActionsCreator()

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
