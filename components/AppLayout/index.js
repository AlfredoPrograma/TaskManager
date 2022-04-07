import { useState, useEffect } from 'react'

import { AuthContext } from 'context/Auth'
import { authStateObserver, AUTH_STATES } from 'server/auth'

import styles from './styles'

export default function AppLayout ({ children }) {
  const [authState, setAuthState] = useState(AUTH_STATES.USER_UNDEFINED)

  useEffect(() => {
    authStateObserver(setAuthState)
  }, [])

  return (
    <>
      <AuthContext.Provider value={authState}>
        <div className='main'>
          { children }
        </div>
      </AuthContext.Provider>

      <style jsx>{styles}</style>
    </>
  )
}
