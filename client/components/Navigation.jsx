import React from 'react'
import { connect } from 'react-redux'
import AuthNav from './AuthNav'
import PageMenu from './PageMenu'

const Navigation = (props) => {
  // const { activePage } = props

  return (
    <div className='nav'>
      <PageMenu/>
      <AuthNav/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Navigation)
