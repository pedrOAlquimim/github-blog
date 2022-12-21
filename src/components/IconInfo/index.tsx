import { ReactNode } from 'react'
import { InfoIconContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text?: ReactNode
}

export function IconInfo({ text, icon }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <span>{icon}</span>
      <p>{text}</p>
    </InfoIconContainer>
  )
}
