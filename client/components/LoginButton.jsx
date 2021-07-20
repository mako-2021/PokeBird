import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Menu } from 'semantic-ui-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Menu.Item
      position='right'
      onClick={() => loginWithRedirect()}>
      <i className="fa fa-sign-in" aria-hidden="true"></i>
    </Menu.Item>
  )
}

export default LoginButton
