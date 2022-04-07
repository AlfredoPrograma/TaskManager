import Image from 'next/image'
import { useContext, useState } from 'react'

import { AUTH_STATES, loginWithGithub, loginWithGoogle } from 'server/auth'
import { AuthContext } from 'context/Auth'
import useRedirect, { AUTH_ROUTE_TYPE } from 'hooks/useRedirect'

import { FormLayout } from 'components/Form/Layout'

import GoogleIcon from 'icons/GoogleIcon'
import GithubIcon from 'icons/GithubIcon'
import { IconButton } from 'components/IconButton'

import { signInErrors } from 'errors/signIn'
import { ErrorMessage } from 'components/Error/ErrorMessage'

import { Spinner } from 'components/Spinner'

import styles from '../styles'

export default function SignIn () {
  const user = useContext(AuthContext)
  useRedirect(AUTH_ROUTE_TYPE.PROTECTED)

  const [isError, setIsError] = useState(false)
  const [checking, setChecking] = useState(false)

  const handleLogins = (onLogin) => {
    setIsError(false)
    setChecking(true)

    onLogin()
      .then(() => setChecking(false))
      .catch(() => {
        setIsError(true)
        setChecking(false)
      })
  }

  const handleLoginWithGoogle = () => handleLogins(loginWithGoogle)

  const handleLoginWithGithub = () => handleLogins(loginWithGithub)

  return (
    <>
      { user === AUTH_STATES.USER_NOT_LOGGED &&
        <FormLayout>
          <Image src={'/signIn.jpg'} width={3000} height={2000} />

          <header>
            <span>Welcome to <h1>MyOrganizer</h1></span>
          </header>

          <footer>
            <h2><span>Sign in with</span></h2>

          { checking
            ? <Spinner /> // spinner
            : <div className='icon-buttons-wrapper'>
              <IconButton color='gray' onClick={handleLoginWithGoogle}>
                <GoogleIcon />
              </IconButton>

              <IconButton color='gray' onClick={handleLoginWithGithub}>
                <GithubIcon />
              </IconButton>
            </div>
        }
          </footer>

          { isError && <ErrorMessage message={signInErrors.emailAlreadyRegistered.message} />}
        </FormLayout>
      }

      <style jsx>{styles}</style>
    </>
  )
}
