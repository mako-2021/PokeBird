import React from 'react'
import { connect } from 'react-redux'
import AutheticationButton from './AutheticationButton'
import PageMenu from './PageMenu'

const Navigation = (props) => {
  // const { activePage } = props

  return (
    <div className='top'>
      <ul className="navbar theme-d2 left-align large">
        <PageMenu/>
        <AutheticationButton/>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Navigation)
