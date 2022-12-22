import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
