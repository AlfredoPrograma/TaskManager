import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'styles/theme'

const AppLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

export default AppLayout
