import { Typography } from '@mui/material'
import { NavLink } from 'components/NavLink'
import styles from './styles.module.scss'

export const FormFooter = ({ text, linkText, href }) => {
  return (
    <footer className={styles.formFooter}>
      <Typography align='center'>
        {text}
        <NavLink href={href}>
          {linkText}
        </NavLink>
      </Typography>
    </footer>
  )
}
