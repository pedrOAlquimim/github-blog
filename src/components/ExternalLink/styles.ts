import styled from 'styled-components'

export const ExtenalLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  p {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
  }
`
