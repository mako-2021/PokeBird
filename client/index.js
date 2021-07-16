import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Auth0ProviderWithHistory from './components/auth/auth0-provider-with-history'
import 'semantic-ui-css/semantic.min.css'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Provider>,
    document.getElementById('app')
  )
})
