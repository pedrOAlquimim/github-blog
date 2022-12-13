import styled from 'styled-components'

export const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
