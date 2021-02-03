import React from 'react'
import { Component } from '../router/Router'

import { Footer } from '../footer/Footer'

import './App.css'

export class App extends React.Component {
  componentDidMount () {
    document.title = 'Nathan Woodruff'
  }

  render () {
    return (
      <div className="App">
        <Component />
        <Footer />
      </div>
    )
  }
}

export default App
