import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: row;
  margin: 10px;
  padding-bottom: 10px;
  min-height: 70px;
  max-width: 100%;

  border-bottom-color: #eff1f2;
  border-bottom-width: 2px;
  border-bottom-style: solid;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: ${props => (props.full ? 1 : 0)};
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${props => (props.full ? 1 : 0)};
`

export const Link = styled.a`
  text-decoration: none;
  color: #078fff;
  margin-bottom: 5px;
  line-break: anywhere;
  width: 100%;
  max-width: 100%;
`

export const Name = styled.p`
  color: #47515b;
  font-size: 19px;
  margin-bottom: 5px;
`
