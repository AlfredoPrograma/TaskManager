import styles from './styles'

export const IconButton = ({ children, onClick, color, disabled }) => {
  return (
    <>
      <button
        className={`${disabled && 'disabled'} ${color}`}
        onClick={onClick}
      >
        {children}
      </button>

      <style jsx>{styles}</style>
    </>
  )
}
