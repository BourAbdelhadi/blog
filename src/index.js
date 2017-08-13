import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.querySelector('#root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
