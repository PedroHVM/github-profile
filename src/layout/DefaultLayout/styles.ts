import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-inline: 1.5rem;
  margin-top: 4rem;

  h1 {
    padding: 1rem;
  }

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`