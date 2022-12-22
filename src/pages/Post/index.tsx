/* eslint-disable react/no-children-prop */
import { PostInfo } from './components/PostInfo'
import ReactMarkdown from 'react-markdown'
import { PostContent, PostHeader } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { PostProps } from '../Home'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Post() {
  const { id } = useParams()

  const [postsData, setPostsData] = useState<PostProps>({} as PostProps)

  const markdown = postsData.body

  async function fetchPostsNumber() {
    const response = await api.get(
      `/repos/pedrOAlquimim/github-blog/issues/${id}`,
    )

    setPostsData(response.data)
  }

  useEffect(() => {
    fetchPostsNumber()
  }, [])

  return (
    <div>
      <PostHeader>
        <PostInfo post={postsData} />
      </PostHeader>

      <div>
        <PostContent>
          <ReactMarkdown
            children={markdown}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        </PostContent>
      </div>
    </div>
  )
}
