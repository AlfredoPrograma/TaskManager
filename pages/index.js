import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function IndexPage () {
  const router = useRouter()

  // Check auth and make the replacements
  useEffect(() => {
    router.replace('/auth/signIn')
  }, [])

  return (
    <h1>Loading</h1>
  )
}
