import { initializeApp } from 'firebase/app'
import { credentials } from './config'

export const client = initializeApp(credentials)
