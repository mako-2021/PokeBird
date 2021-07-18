import React from 'react'
import { connect } from 'react-redux'
import BirdsGallery from './BirdsGallery'
import Homepage from './Homepage'
import UserPage from './UserPage'
import Quiz from './Quiz'

const Pages = (props) => {
  const { activePage } = props

  if (activePage === 'Homepage') {
    return <Homepage />
  } else if (activePage === 'Gallery') {
    return <BirdsGallery />
  } else if (activePage === 'User') {
    return <UserPage />
  } else if (activePage === 'Quiz') {
    return <Quiz />
  }
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Pages)
