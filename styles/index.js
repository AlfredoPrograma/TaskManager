import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`

header {
  display: grid;
  place-content: center;
  place-items: center;
  text-align: center;
}

h1 { 
  font-size: 36px;
  color: ${colors.primary}
}

.subtitle {
  text-align: center;
  font-weight: bold;
  font-style: italic;
}

h2 {
    font-size: 16px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 15px;
  }

  span {
    background: ${colors.white};
    padding: 0 10px;
  }

  .icon-buttons-wrapper {
    display: flex;
    justify-content: space-evenly;
  }

`
