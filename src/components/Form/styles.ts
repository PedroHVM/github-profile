import { styled } from 'styled-components'

export const FormContainer = styled.form`
  margin-bottom: 1rem;
  display: flex;
  padding: 1rem;
  background: ${(props) => props.theme['base-div-background']};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 28px 0px;
  width: 50rem;
  gap: 0.5rem;
  border-radius: 8px;

  input {
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 0.5rem;
    border-radius: 8px;
    flex: 1;
  }

  button {
    border: 2px solid ${(props) => props.theme['blue']};
    color: ${(props) => props.theme['base-text']};;
    background-color: transparent;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 100ms;

    &:hover {
      background-color: ${(props) => props.theme['blue']};
      color: black;
    }
  }
` 

export const ErrorMessage = styled.span`
  font-size: smaller;
  color: #cc0000;
`