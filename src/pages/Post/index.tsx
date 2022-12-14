import { PostInfo } from './components/PostInfo'
import { PostHeader } from './styles'

export function Post() {
  return (
    <div>
      <PostHeader>
        <PostInfo />
      </PostHeader>
    </div>
  )
}
