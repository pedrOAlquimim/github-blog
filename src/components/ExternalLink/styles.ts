import styled from 'styled-components'

export const ExtenalLinkContainer = styled.div`
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    margin-bottom: -1px;
  }
`

export const ExternalLinkLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

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
