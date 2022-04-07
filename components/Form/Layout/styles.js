import css from 'styled-jsx/css'
import { breakpoints } from 'styles/theme'

export default css`
  .page {
    display: grid;
    place-items: center;
    place-content: center;
    height: 100%;
    width: 100%; 
  }

  .box {
    width: 400px;
    min-height: 500px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    display: grid;
    gap: 16px;
    background: white;
    padding: 36px;
    border-radius: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .box {
      min-width: 0;
      min-height: 0;
      width: 100vw;
      height: 100vh;
      border-radius: 0px;
      place-content: center;
    }
  }
`
