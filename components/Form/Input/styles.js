import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  div {
    position: relative;
    margin-top: 10px;
    align-items: start;
    align-content: start;
    width: 100%;
    display: grid;
    gap: 4px;
  }

  label {
    font-size: 12px;
    font-weight: bold;
  }

  input {
    width: 100%;
    border-radius: 8px;
    border: 2px solid transparent;
    background: ${colors.gray};
    padding: 12px 16px;
    outline: none;
    transition: .15s all;
  }

  input:focus {
    background: ${`${colors.primary}22`};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: 2px solid ${colors.primary};
  }

  .on-error {
    background: ${`${colors.error}33`};
    border: 2px solid ${colors.error};
  }
`
