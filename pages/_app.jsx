import App from 'next/app'
import React from 'react'
import { Nexus } from '../store'
import { Provider } from 'mobx-react'
let state = {
  store: new Nexus(),
}
class MyMobxApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={state.store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyMobxApp