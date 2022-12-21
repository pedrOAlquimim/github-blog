import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  width: 100%;
  max-width: 26rem;
  max-height: 16.5rem;
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => props.theme['base-post']};
  text-decoration: none;

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }

  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h3 {
      flex: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      text-overflow: ellipsis;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }

    span:first-letter {
      text-transform: capitalize;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
