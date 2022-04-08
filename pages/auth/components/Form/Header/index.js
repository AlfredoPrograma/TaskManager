import { Typography } from '@mui/material'
import styles from './styles.module.scss'

export function FormHeader ({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <Typography fontSize={14}>{subtitle}</Typography>
      <Typography fontSize={32} color='primary' fontWeight='bold'>{title}</Typography>
    </header>
  )
}
