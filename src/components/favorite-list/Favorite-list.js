import React from 'react'
import { useSelector } from 'react-redux'
import { FavoriteTile } from './components/favorite-tile/FavoriteTile'
import { Content } from './styles'

export function FavoritesList() {
  const { favorites } = useSelector(state => state.favoritesStore)
  const { search } = useSelector(state => state.searchStore)

  if (search.length) {
    const newFavorites = filter(favorites, search);

    return <List favorites={newFavorites} />
  }

  return <List favorites={favorites} />
}

function List({ favorites }) {
  return (
    <Content>
      {favorites.map(favorite => (
        <FavoriteTile key={String(favorite.id)} {...favorite} />
      ))}
    </Content>
  )
}

function filter(favorites, search){
  const hasSearch = tag => {
    if (tag.search(search.toUpperCase()) >= 0) return tag
  }
  const favoritesWithSearch = fav => ({
    ...fav,
    search: fav.tags.filter(hasSearch).length > 0,
  })
  const newFavorites = favorites.map(favoritesWithSearch).filter(fav => fav.search)
  return newFavorites
}
