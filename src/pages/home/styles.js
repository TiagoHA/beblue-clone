import styled from 'styled-components'
import logo from '../../assets/SVG/logo.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  display: flex;
  flex: 1;
`

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const Logo = styled.img.attrs({ alt: 'logo', src: logo })`
  margin: 10px 10px 30px 10px;
  align-self: flex-start;
`
