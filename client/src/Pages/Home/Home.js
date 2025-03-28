import React from 'react'

import Records from '../../Components/Records/Records'
import Form from '../../Components/Form/Form'
import './Home.css'

const home = () => {
  return (
    <div className='home-section'>
    <Records/>
    <Form />
    </div>
  )
}

export default home