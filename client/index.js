import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Auth0Provider
        domain="dev-850ddeyb.us.auth0.com"
        clientId="yQ5tlPE8hQCvYFW1XUyyKo7RvhxL8qNs"
        redirectUri='localhost:3000'>
        <App />
      </Auth0Provider>
    </Provider>,
    document.getElementById('app')
  )
})
