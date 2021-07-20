import React from 'react'
import { connect } from 'react-redux'
import AutheticationButton from './AutheticationButton'
import PageMenu from './PageMenu'
import { Menu } from 'semantic-ui-react'

const Navigation = (props) => {
  // const { activePage } = props

  return (
    <div className='top'>
      <Menu size='large'>
        <PageMenu/>
        <AutheticationButton/>
      </Menu>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(Navigation)
