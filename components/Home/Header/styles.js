import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  header {
    height: 100%;
    width: 100%;
    grid-column: span 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: ${colors.white};
    border-bottom: 3px solid ${colors.dark};
    padding: 24px 18px;
  }   

  span {
    font-size: 18px;
    margin: 0 18px;
  }
`
