import styled from 'styled-components'

export const ButtonDelete = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 60px;

  @media (max-width: 768px) {
    width: max-content;
    align-self: flex-end;
    margin-bottom: 5px;
  }

  img {
    margin-right: 10px;
  }

  p {
    color: #bdc4c9;
    padding-top: 2px;
    font-weight: 600;
    font-size: 12px;
  }
`
