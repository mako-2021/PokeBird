import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

// react code should be in /client not /server
// I'm ok with this beign manually tested as it's mostly config for code you didn't write

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  // const domain = 'dev-850ddeyb.us.auth0.com'
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  // const clientId = 'yQ5tlPE8hQCvYFW1XUyyKo7RvhxL8qNs'

  const history = useHistory()

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
