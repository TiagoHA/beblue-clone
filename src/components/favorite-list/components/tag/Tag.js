import React from 'react'
import { Actions } from '../../../../store/ducks/favorites'
import Del from '../../../../assets/SVG/X.svg'
import { TagContainer, ButtonDelete } from './styles'
import styled from 'styled-components'

export function TagsList({ tags, id }) {
  return (
    <TagContainer>
      {tags.map(tag => (
        <Tag key={tag} tag={tag} id={id} />
      ))}
    </TagContainer>
  )
}

export function Tag({ id, tag }) {
  const { deleteTag } = Actions()

  return (
    <ButtonDelete>
      <p>{tag}</p>
      <button onClick={() => deleteTag({ favorite_id: id, tag })}>
        <img src={Del} alt="delete" />
      </button>
    </ButtonDelete>
  )
}
