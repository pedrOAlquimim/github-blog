import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  width: 100%;
  margin-top: -5.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`

export const ProfileCardDetails = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${(props) => props.theme['base-title']};
    }
  }

  > p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    > div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`
