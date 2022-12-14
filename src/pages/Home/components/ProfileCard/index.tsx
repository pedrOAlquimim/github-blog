import { ExternalLink } from '../../../../components/ExternalLink'
import { IconInfo } from '../../../../components/IconInfo'
import { ProfileCardContainer, ProfileCardDetails } from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img
        src={'https://avatars.githubusercontent.com/u/58578838?v=4'}
        alt=""
      />

      <ProfileCardDetails>
        <header>
          <h2>Lorem Ipsum</h2>
          <ExternalLink text={<p>Github</p>} />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div>
          <IconInfo />
          <IconInfo />
          <IconInfo />
        </div>
      </ProfileCardDetails>
    </ProfileCardContainer>
  )
}
