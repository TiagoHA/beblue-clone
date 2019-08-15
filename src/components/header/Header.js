import React, { useState } from 'react'
import styled from 'styled-components'
import { FavoritesList } from '../favorite-list/Favorite-list'
import { AddFavorite } from './components/add-favorite/AddFavorite'
import { Search } from './components/search/Search'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from '../../store/ducks/search'

export function Header() {
  const { visibility } = useSelector(state => state.searchStore)

  return <>{visibility ? <Search /> : <AddFavorite />}</>
}
