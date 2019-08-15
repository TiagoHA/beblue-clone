import React, { useState } from 'react'
import styled from 'styled-components'
import { FavoritesList } from '../favorite-list/Favorite-list'
import { AddFavorite } from './components/add-favorite/AddFavorite'
import { Search } from './components/search/Search'

export function Header() {
  const [visibleSearch, setStateVisible] = useState(true)
  const changeVisible = () => setStateVisible(!visibleSearch)

  return (
    <>
      {visibleSearch ? (
        <Search changeVisible={changeVisible} />
      ) : (
        <AddFavorite changeVisible={changeVisible} />
      )}
    </>
  )
}
