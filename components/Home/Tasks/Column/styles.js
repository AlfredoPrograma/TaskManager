import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  div {
    border-radius: 8px;
    padding: 24px;
    background: ${`${colors.white}`};
    height: 100%;
    width: 80%;
    transition: 0.15s all;
    overflow: auto;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }

  header {
    padding: 12px 24px;;
    border-radius: 8px;
    background: ${`${colors.dark}88`};
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    font-size: 18px;
  }

  ul {
    display: grid;
    gap: 12px;
    margin-top: 24px;
  }

  .on-drag-over {
    background: ${`${colors.dark}11`};
  }
`
