import React from 'react'
import { Container, Col, Link, Name, DeleteContainer } from './styles'
import { DeleteFavorite } from '../delete-favorite/DeleteFavorite'
import { TagsList } from '../tag/Tag'

export function FavoriteTile({ id, title, link, tags }) {
  return (
    <Container>
      <Col full>
        <Name>{title}</Name>
        <Link href={link}>{link}</Link>
        <TagsList id={id} tags={tags} />
      </Col>
      <DeleteContainer>
        <DeleteFavorite id={id} />
      </DeleteContainer>
    </Container>
  )
}
