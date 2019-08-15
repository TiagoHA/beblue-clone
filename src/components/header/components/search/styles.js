import lupa from '../../../../assets/SVG/Lupa.svg'
import add from '../../../../assets/SVG/Adicionar copy.svg'
import styled from 'styled-components'
import { Icon } from '../shared/shared.styles'

export const Magnifier = styled(Icon).attrs({ alt: 'search', src: lupa })``

export const Add = styled(Icon).attrs({ alt: 'add favorite', src: add })``

export const FormButton = styled.button.attrs({ type: 'submit' })`
  background-color: inherit;
  display: flex;
`
