import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    padding: 20px;
    border-radius: 8px;
    background: ${colors.gray};
    list-style: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

`
