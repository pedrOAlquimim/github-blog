import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        margin-bottom: -1px;
      }

      span {
        font-size: 0.75rem;
      }

      p {
        font-size: 0.75rem;
        text-transform: uppercase;
      }
    }
  }

  h2 {
    font-size: 1.5rem;
  }

  > div {
    margin-top: 0.5rem;
    display: flex;
    gap: 2rem;
  }
`
