import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Link, Name } from './styles'
import { DeleteFavorite } from './components/delete-favorite/DeleteFavorite'
import { TagsList } from './components/tag/Tag'

export function FavoritesList() {
  const { favorites } = useSelector(state => state.favoritesStore)
  const { search } = useSelector(state => state.searchStore)

  if (search.length) {
    const hasSearch = tag => {
      if (tag.search(search.toUpperCase()) >= 0) return tag
    }
    const favoritesWithSearch = fav => ({
      ...fav,
      search: fav.tags.filter(hasSearch).length > 0,
    })
    const newFavorites = favorites.map(favoritesWithSearch).filter(fav => fav.search)

    return newFavorites.map(favorite => <FavoriteTile key={String(favorite.id)} {...favorite} />)
  }

  return favorites.map(favorite => <FavoriteTile key={String(favorite.id)} {...favorite} />)
}

function FavoriteTile({ id, name, link, tags }) {
  return (
    <Container>
      <Col full>
        <Name>{name}</Name>
        <Link href={link}>{link}</Link>
        <TagsList id={id} tags={tags} />
      </Col>
      <Col>
        <DeleteFavorite id={id} />
      </Col>
    </Container>
  )
}
