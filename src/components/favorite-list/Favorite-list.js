import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Col } from './styles'
import { Actions } from '../../store/ducks/favorites'

export function FavoritesList() {
  const { favorites } = useSelector(state => state.favoritesStore)

  return favorites.map(favorite => <FavoriteTile key={favorite.id} {...favorite} />)
}

function FavoriteTile({ id, name, link, tags }) {
  const { deleteFavorite } = Actions()

  return (
    <Container>
      <Col full>
        <p>{name}</p>
        <a href={link}>{link}</a>
        <div>{JSON.stringify(tags)}</div>
      </Col>
      <Col>
        <button onClick={() => deleteFavorite(id)}>Delete</button>
      </Col>
    </Container>
  )
}
