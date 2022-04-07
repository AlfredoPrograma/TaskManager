import css from 'styled-jsx/css'
import { colors, breakpoints } from 'styles/theme'

export default css`
  div {
    padding: 36px 24px;
    grid-column: 2 / span 5; 
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  }

  header {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  h1 {
    border-radius: 8px;
    width: max-content;
    background: ${colors.white};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 12px 36px;
  }

  .tasks-grid {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    height: 92%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    div {
      grid-column: span 6;
    }    
  }
`
