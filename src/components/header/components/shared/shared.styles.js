import lupa from '../../../../assets/SVG/Lupa copy.svg'
import add from '../../../../assets/SVG/Adicionar.svg'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;
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
  ${props => props.error && css`
    border-color: #b22f34;
  `}

`
