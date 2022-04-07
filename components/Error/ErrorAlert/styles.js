import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  div {
    width: 50%;
    padding: 12px;
    text-align: center;
  }

  strong {
    font-size: 18px;
    color: ${colors.error};
    font-weight: bold;
  }

`
