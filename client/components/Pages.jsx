import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import BirdsGallery from './BirdsGallery'
import Homepage from './Homepage'
import UserPage from './UserPage'
import Quiz from './Quiz'

const Pages = (props) => {
  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/BirdsGallery' component={BirdsGallery} />
      <Route exact path='/Quiz' component={Quiz} />
      <Route exact path='/User' component={UserPage} />
    </>
  )
}
const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Pages)
