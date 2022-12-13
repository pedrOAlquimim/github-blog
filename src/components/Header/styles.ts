import styled from 'styled-components'
import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 4rem;
  padding-bottom: 8.375rem;

  background: url(${coverImg}) no-repeat center;
  background-size: cover;
`
