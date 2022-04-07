import Link from 'next/link'
import styles from './styles'

export const NavLink = ({ href, text }) => {
  return (
    <>
      <Link href={href}>
        <a>
          {text}
        </a>
      </Link>

      <style jsx>{styles}</style>
    </>
  )
}
