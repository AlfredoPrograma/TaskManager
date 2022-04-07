import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  button {
    padding: 3px;
    background: none;
    display: grid;
    place-items: center;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    transition: all .15s
  }

  .gray:hover {
    background: ${colors.gray}
  }

  .red:hover {
    background: ${colors.error}
  }

  .disabled {
    pointer-events: none;
    background: red;
  }
`
