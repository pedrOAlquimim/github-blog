import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostConatainer = styled.div`
  margin-bottom: 14.625rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`
