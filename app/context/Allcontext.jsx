import React from 'react'
import Anicardprovider from './Anicardprovider'
import Movingprovider from './Movingprovider'

const Allcontext = ({ children }) => {
  return (
    <Anicardprovider>
      <Movingprovider>
        {children}
      </Movingprovider>
    </Anicardprovider>
  )
}

export default Allcontext
