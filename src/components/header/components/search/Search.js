import React from 'react'
import { Magnifier, Add } from './styles'
import { Container, Input, Icons } from '../shared/shared.styles'
import { ActionsCreator } from '../../../../store/ducks/search'
import { useSelector } from 'react-redux'

export function Search() {
  const { toggleSearch, onChangeSearch } = ActionsCreator()
  const { search } = useSelector(state => state.searchStore)
  const clearSearch = () => onChangeSearch('')

  return (
    <Container>
      <Icons>
      <Add onClick={() => toggleSearch(false)} />
      <Magnifier onClick={clearSearch} />
      </Icons>

      <Input
        placeholder="Filter by Tag"
        onChange={e => onChangeSearch(e.target.value)}
        value={search}
      />
    </Container>
  )
}
