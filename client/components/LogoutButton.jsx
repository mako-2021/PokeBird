import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Menu } from 'semantic-ui-react'
const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Menu.Item
      position='right'
      onClick={() => logout()}>
      <i style={{ color: 'red' }}className="fa fa-sign-out" aria-hidden="true"></i>
    </Menu.Item>
  )
}

export default LogoutButton
