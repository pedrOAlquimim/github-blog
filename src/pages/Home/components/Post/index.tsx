import { PostContainer } from './styles'
import { FormatDistanceDate } from '../../../../utils/formatter'
import { PostProps } from '../..'
import { NavLink } from 'react-router-dom'

interface PostCompProps {
  post: PostProps
}

export function Post({ post }: PostCompProps) {
  const formattedDate = FormatDistanceDate(post.updated_at)

  const postLink = '/post/' + post.number

  return (
    <PostContainer>
      <NavLink to={postLink}>
        <header>
          <h3>{post.title}</h3>
          <span>{formattedDate}</span>
        </header>

        <p>{post.body}</p>
      </NavLink>
    </PostContainer>
  )
}
