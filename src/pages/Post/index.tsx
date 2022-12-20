import { PostInfo } from './components/PostInfo'
import ReactMarkdown from 'react-markdown'
import { PostContent, PostHeader } from './styles'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { PostProps } from '../Home'
import { useParams } from 'react-router-dom'

export function Post() {
  const { issuesNumber } = useParams()

  const [postsData, setPostsData] = useState<PostProps>({} as PostProps)

  const fetchPostsNumber = useCallback(async () => {
    const response = await api.get(
      `/repos/pedrOAlquimim/github-blog/issues/${issuesNumber}`,
    )

    setPostsData(response.data)
  }, [issuesNumber])

  useEffect(() => {
    fetchPostsNumber()
  }, [fetchPostsNumber])

  return (
    <div>
      <PostHeader>
        <PostInfo key={postsData.number} post={postsData} />
      </PostHeader>

      <div>
        <PostContent>
          <ReactMarkdown>{postsData.body}</ReactMarkdown>
        </PostContent>
      </div>
    </div>
  )
}
