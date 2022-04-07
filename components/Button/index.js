import styles from './styles'

export function Button ({ children, onClick, color, disabled }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${disabled && 'disabled'} ${color}`}
      >
        {children}
      </button>
      <style jsx>{styles}</style>
    </>
  )
}
