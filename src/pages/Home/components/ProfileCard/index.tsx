import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { IconInfo } from '../../../../components/IconInfo'
import { api } from '../../../../lib/axios'
import { ProfileCardContainer, ProfileCardDetails } from './styles'

interface ProfileDataProps {
  login: string
  name: string
  bio: string
  company?: string
  followers: number
  avatar_url: string
  html_url: string
}

export function ProfileCard() {
  const [profileData, setProfileData] = useState<ProfileDataProps>(
    {} as ProfileDataProps,
  )

  async function fetchProfile() {
    const response = await api.get('users/pedrOAlquimim')

    setProfileData(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileCardContainer>
      <img src={profileData.avatar_url} alt="" />

      <ProfileCardDetails>
        <header>
          <h2>{profileData.name}</h2>
          <ExternalLink link={profileData.html_url} text={<p>Github</p>} />
        </header>

        <p>{profileData.bio}</p>

        <div>
          <IconInfo
            text={profileData.login}
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
          <IconInfo
            text={profileData.company}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          />
          <IconInfo
            text={profileData.followers + ' seguidores'}
            icon={<FontAwesomeIcon icon={faUserGroup} />}
          />
        </div>
      </ProfileCardDetails>
    </ProfileCardContainer>
  )
}
