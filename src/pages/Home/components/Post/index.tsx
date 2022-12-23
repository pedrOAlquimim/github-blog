import { PostContainer } from './styles'
import { formatDistanceDate } from '../../../../utils/formatter'
import { PostProps } from '../..'

interface PostCompProps {
  post: PostProps
}

export function Post({ post }: PostCompProps) {
  const formattedDate = formatDistanceDate(post.updated_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <header>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </header>

      <p>{post.body}</p>
    </PostContainer>
  )
}
