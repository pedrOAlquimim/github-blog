import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { PostInfo } from './components/PostInfo'
import { PostContent, PostHeader } from './styles'

export function Post() {
  const { posts } = useContext(PostContext)

  return (
    <div>
      <PostHeader>
        {posts.map((post) => {
          return <PostInfo key={post.number} post={post} />
        })}
      </PostHeader>

      <div>
        <PostContent></PostContent>
      </div>
    </div>
  )
}
