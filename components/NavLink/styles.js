import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  a {
    font-weight: bold;
    text-decoration: none;
    font-size: 21px;
    cursor: pointer;
    color: ${colors.dark};
    transition: 0.15s all;
  }

  a:hover {
    color: ${colors.primary}
  }


`
