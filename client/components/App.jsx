import React from 'react'
import BirdsGallery from './BirdsGallery'
import Homepage from './Homepage'
import { connect } from 'react-redux'

function App (props) {
  const { activePage, dispatch } = props

  return (
    <>
      {activePage === 'Homepage'
        ? <Homepage />
        : <BirdsGallery />
      }

    </>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return {
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(App)
