import { Paper } from '@mui/material'
import styles from './styles.module.scss'

export function FormBox ({ children }) {
  return (
    <>
      <Paper className={styles.box} elevation={8}>
        {children}
      </Paper>
    </>
  )
}
