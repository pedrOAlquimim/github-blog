import { ExternalLink } from '../../../../components/ExternalLink'
import { IconInfo } from '../../../../components/IconInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostInfoContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { formatDistanceDate } from '../../../../utils/formatter'
import { PostProps } from '../../../Home'

interface PostInfoProps {
  post: PostProps
}

export function PostInfo({ post }: PostInfoProps) {
  const formattedDate = formatDistanceDate(post.updated_at)

  return (
    <PostInfoContainer>
      <header>
        <NavLink to={'/'}>
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <p>Voltar</p>
        </NavLink>

        <ExternalLink text={<p>Ver no Github</p>} link={post.html_url} />
      </header>

      <h2>{post.title}</h2>

      <div>
        <IconInfo
          icon={<FontAwesomeIcon icon={faGithub} />}
          text={post.user?.login}
        />
        <IconInfo
          icon={<FontAwesomeIcon icon={faCalendarDay} />}
          text={formattedDate}
        />
        <IconInfo
          icon={<FontAwesomeIcon icon={faComment} />}
          text={post.comments + ' comentários'}
        />
      </div>
    </PostInfoContainer>
  )
}
