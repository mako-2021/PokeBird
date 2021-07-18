import React from 'react'
import { connect } from 'react-redux'
import BirdsGallery from './BirdsGallery'
import Homepage from './Homepage'
import UserPage from './UserPage'

// React router is generally better than managing navigation in the redux state - but this is ok
// But you know what would be awesome either way?
// A test
const Pages = (props) => {
  const { activePage } = props

  if (activePage === 'Homepage') {
    return <Homepage />
  } else if (activePage === 'Gallery') {
    return <BirdsGallery />
  } else if (activePage === 'User') {
    return <UserPage />
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
