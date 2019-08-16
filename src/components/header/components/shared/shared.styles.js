import lupa from '../../../../assets/SVG/Lupa copy.svg'
import add from '../../../../assets/SVG/Adicionar.svg'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px 0;
  }
`

export const Icon = styled.img.attrs({ alt: 'search', src: lupa })`
  width: 25px;
  margin-right: 15px;
`

export const Add = styled.img.attrs({ alt: 'add favorite', src: add })`
  width: 25px;
  margin-right: 15px;
`
export const Input = styled.input`
  flex: 1;
  margin: 0 10px;
  padding: 10px;
  line-height: 18px;

  ${props =>
    props.error &&
    css`
      border: 1px solid #b22f34;
    `}
`

export const Icons = styled.div`
  flex-direction: row;
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    justify-content: space-evenly;
  }
`
