import React from 'react'
import { Grid } from 'semantic-ui-react'

function Footer () {
  return (
    <Grid verticalAlign='bottom' textAlign='center' className='sticky-foot'>
      <Grid.Row style={{ backgroundColor: 'red' }}>
      I am a Foot
      </Grid.Row>
    </Grid>
  )
}

export default Footer
