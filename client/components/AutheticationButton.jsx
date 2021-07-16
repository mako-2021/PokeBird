import React from 'react'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

import { useAuth0 } from '@auth0/auth0-react'

const AuthenticationButton = () => {
  const everything = useAuth0()
  // const { isAuthenticated } = useAuth0()
  console.log('evertyhing ever', everything)

  // return isAuthenticated ? <LogoutButton /> : <LoginButton />
  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
    </div>
  )
}

export default AuthenticationButton
