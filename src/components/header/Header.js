import React from 'react'
import { AddFavorite } from './components/add-favorite/AddFavorite'
import { Search } from './components/search/Search'
import { useSelector } from 'react-redux'

export function Header() {
  const { visibility } = useSelector(state => state.searchStore)

  return <>{visibility ? <Search /> : <AddFavorite />}</>
}
