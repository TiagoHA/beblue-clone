import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;

    input {
      margin-bottom: 5px;
    }
  }
`

export const FormButton = styled.button.attrs({ type: 'submit' })`
  background-color: inherit;
  display: flex;
`
