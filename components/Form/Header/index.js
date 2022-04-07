import styles from './styles'

export function FormHeader ({ title, subtitle }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </header>

      <style jsx>{styles}</style>
    </>
  )
}
