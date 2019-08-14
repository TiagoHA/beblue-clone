import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: row;
  margin: 10px;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => (props.full ? 1 : 0)};
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${props => (props.full ? 1 : 0)};
`
