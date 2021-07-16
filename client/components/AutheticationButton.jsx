import React, { useEffect } from 'react'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

import { useAuth0 } from '@auth0/auth0-react'

const AuthenticationButton = () => {
  // const everything = useAuth0()
  const { isAuthenticated, user } = useAuth0()
  useEffect(() => {
    console.log('user', user)
    console.log('isAuth', isAuthenticated)
  }, [isAuthenticated])

  // return isAuthenticated ? <LogoutButton /> : <LoginButton />
  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
    </div>
  )
}

export default AuthenticationButton
