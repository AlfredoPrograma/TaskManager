import styles from './styles'

export function HomeLayout ({ children }) {
  return (
    <>
      <div>
        {children}
      </div>

      <style jsx>{styles}</style>
    </>
  )
}
