import React from 'react'
import { connect } from 'react-redux'

export const Pages = (props) => {
  
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePages: state.activePages
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages)
