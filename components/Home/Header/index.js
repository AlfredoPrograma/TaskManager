import Image from 'next/image'
import { ImageWrapper } from 'components/ImageWrapper'

import styles from './styles'

export const HomeHeader = ({ userData }) => {
  const { displayName, avatar } = userData

  return (
    <>
      <header>
        <span>{displayName}</span>

        <ImageWrapper>
          <Image src={avatar || '/' } width={28} height={28} />
        </ImageWrapper>
      </header>

      <style jsx>{styles}</style>
    </>
  )
}
