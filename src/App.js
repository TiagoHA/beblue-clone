import React from 'react'

import Routes from './routes'
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux'
import { Store } from './store'

export default function App() {
  return (
    <Provider store={Store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  )
}
