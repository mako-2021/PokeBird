import React from 'react'
import { connect } from 'react-redux'
import AuthNav from './AuthNav'

const Navigation = (props) => {
  // const { activePage } = props

  return (
    <div>
      <AuthNav/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Navigation)
