import { AuthContext } from 'context/Auth'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AUTH_STATES } from 'server/auth'

export const AUTH_ROUTE_TYPE = {
  PROTECTED: 'PROTECTED',
  PRIVATE: 'PRIVATE'
}

export default function useRedirect (routeType) {
  const user = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (routeType === AUTH_ROUTE_TYPE.PRIVATE) {
      user === AUTH_STATES.USER_NOT_LOGGED && router.replace('/')
    }

    if (routeType === AUTH_ROUTE_TYPE.PROTECTED && user?.displayName) {
      user && router.replace('/home')
    }
  }, [user])
}
