import React from 'react'
import Styled from './style'
import { CTabs } from './style'

const CustomTabs = props => (
  <div style={{marginBottom:"20px",background:"white"}}>
    <CTabs
      variant="fullWidth"
      indicatorColor="primary"
      
      {...props}
    />
  </div>
)

export default CustomTabs
