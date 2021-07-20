import React from 'react'
// import BirdsGallery from './BirdsGallery'
// import Homepage from './Homepage'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import Pages from './Pages'
import Footer from './Footer'

function App (props) {
  // const { activePage } = props

  return (
    <>
      <Navigation />
      <Pages />
      <Footer />
    </>
  )
}

function mapStateToProps (state) {
  return {
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(App)
