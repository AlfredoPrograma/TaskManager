import styles from './styles'

export function FormLayout ({ children }) {
  return (
    <>
      <div className='page'>
        <div className='box'>
          {children}
        </div>
      </div>
      <style jsx>{styles}</style>

    </>
  )
}
