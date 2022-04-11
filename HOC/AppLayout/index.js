import { ThemeProvider } from '@mui/material/styles'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterMoment'
import { theme } from 'styles/theme'

const AppLayout = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default AppLayout
