import styles from './styles'

export const ErrorAlert = ({ message }) => {
  return (
    <>
      <div>
        <strong>
          {message}
        </strong>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}
