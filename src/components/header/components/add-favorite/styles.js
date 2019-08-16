import lupa from '../../../../assets/SVG/Lupa copy.svg'
import add from '../../../../assets/SVG/Adicionar.svg'
import styled from 'styled-components'
import { Icon } from '../shared/shared.styles'

export const Magnifier = styled(Icon).attrs({ alt: 'search', src: lupa })``

export const Add = styled.input.attrs({ form: 'favoriteForm', type: 'image', src: add })`
  width: 25px;
  margin-right: 15px;
  border: none;
`
