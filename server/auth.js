import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  GithubAuthProvider,
  signOut
} from 'firebase/auth'

import { client } from 'server'

const auth = getAuth(client)
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

const mapUserData = (user) => {
  const userData = user && {
    uid: user.uid,
    email: user.email,
    avatar: user.photoURL,
    displayName: user.displayName
  }

  return userData || AUTH_STATES.USER_NOT_LOGGED
}

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleAuthProvider)
    .then(({ user }) => mapUserData(user))
}

export const loginWithGithub = () => {
  return signInWithPopup(auth, githubAuthProvider)
    .then(({ user }) => mapUserData(user))
}

export const logOut = () => {
  return signOut(auth)
}

export const authStateObserver = (onChange) => {
  onAuthStateChanged(auth, user => {
    const normalizedUser = mapUserData(user)
    onChange(normalizedUser)
  })
}

export const AUTH_STATES = {
  USER_NOT_LOGGED: null,
  USER_UNDEFINED: undefined
}
