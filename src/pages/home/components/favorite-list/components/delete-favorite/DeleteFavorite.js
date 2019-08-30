import React from 'react'
import Trash from '../../../../../../assets/SVG/Trash.svg'
import { ButtonDelete } from './styles'
import { ActionsCreator } from 'store/ducks/favorites'

export function DeleteFavorite({ id }) {
  const { deleteFavorite } = ActionsCreator()

  return (
    <ButtonDelete onClick={() => deleteFavorite(id)}>
      <img src={Trash} alt="trash" />
      <p>DELETE</p>
    </ButtonDelete>
  )
}
