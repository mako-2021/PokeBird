import React from 'react'
import { connect } from 'react-redux'
import AuthenticationButton from './AutheticationButton'


const Navigation = (props) => {
  // const { activePage } = props

  return (
    <div className='nav-bar'>
      <menu>
        <AuthenticationButton/>
      </menu>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Navigation)
