import React from 'react'
import { Container, Col, Link, Name } from './styles'
import { DeleteFavorite } from '../delete-favorite/DeleteFavorite'
import { TagsList } from '../tag/Tag'

export function FavoriteTile({ id, title, link, tags }) {
  const fixLink = `https://${link}`

  return (
    <Container>
      <Col full>
        <Name>{title}</Name>
        <Link href={fixLink}>{link}</Link>
        <TagsList id={id} tags={tags} />
      </Col>
      <Col>
        <DeleteFavorite id={id} />
      </Col>
    </Container>
  )
}
