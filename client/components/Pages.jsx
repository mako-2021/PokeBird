import React from 'react'
import { connect } from 'react-redux'
import BirdsGallery from './BirdsGallery'
import Homepage from './Homepage'
import UserPage from './UserPage'

export const Pages = (props) => {
  const { activePage } = props
  console.log('activePage', activePage)

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
