import styles from './styles'

export const Spinner = () => {
  return (
    <>
    <div className='spinner-wrapper'>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>

    <style jsx>{styles}</style>
    </>
  )
}
