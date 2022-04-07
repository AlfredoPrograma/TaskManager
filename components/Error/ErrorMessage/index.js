import styles from './styles'

export const ErrorMessage = ({ message }) => {
  return (
    <>
      <span>{message}</span>
      <style jsx>{styles}</style>
    </>
  )
}
