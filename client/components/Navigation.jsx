import React from 'react'
import { connect } from 'react-redux'
import AuthenticationButton from './AutheticationButton'
import PageMenu from './PageMenu'

const Navigation = (props) => {
  // const { activePage } = props

  return (
    <div className='nav'>
      <PageMenu/>
      <AuthenticationButton/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Navigation)
