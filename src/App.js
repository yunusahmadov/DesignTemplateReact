import React, { Component } from 'react'
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header.js'
import Main from './components/Main/Main'

export class App extends Component {
  render() {
    return (
      <div>
      <Header
      design="Design Studio"/>
      <Main/>
      <Footer/>
      </div>
      
    )
  }
}

export default App