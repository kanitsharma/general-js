import React from 'react'
import PropTypes from 'prop-types'

const Gridcomponent = ({ children }) =>
  <div className='grid'>
    {children}
  </div>

Gridcomponent.propTypes = {
  children: PropTypes.node
}

export default Gridcomponent
