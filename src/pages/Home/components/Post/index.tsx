import { PostContainer } from './styles'
import { PostProps } from '../../../../contexts/PostContext'
import { FormatDistanceDate } from '../../../../utils/formatter'

interface PostCompProps {
  post: PostProps
}

export function Post({ post }: PostCompProps) {
  const formattedDate = FormatDistanceDate(post.updated_at)

  return (
    <PostContainer>
      <header>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </header>

      <p>{post.body}</p>
    </PostContainer>
  )
}
