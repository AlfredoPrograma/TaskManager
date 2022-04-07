import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  button {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 16px;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: .3s all;
    user-select: none
  }

  .primary:hover {
    background: #1769aa;
  }

  .primary {
    background: ${colors.primary};
  }

  .red {
    background: ${colors.error}cc;
  }

  .red:hover {
    background: ${colors.error}
  }


  
  .disabled {
    pointer-events: none;
    background: #2196f3aa;
  }
`
