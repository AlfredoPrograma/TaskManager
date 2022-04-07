import css from 'styled-jsx/css'
import { breakpoints, colors } from 'styles/theme'

export default css`
  aside {
    display: grid;
    min-width: 250px;
    grid-template-rows: 20% 60% 20%;
    padding: 18px;
    background: ${colors.white};
    grid-row: span 2;
    height: 100%;
    border-right: 3px solid ${colors.dark};
  }

  h1 {
    font-size: 36px;
    text-align: center;
    color: ${colors.primary};
  }

  nav {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
  }

  .nav-link-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
  }

  footer {
    display: grid;
    place-items: center;
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    aside {
      grid-row: span 1;
    }    
  }
`
