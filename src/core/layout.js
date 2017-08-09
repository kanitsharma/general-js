import React from 'react'
import { IndexLink, Link } from 'react-router' // eslint-disable-line
import PropTypes from 'prop-types'

export const CoreLayout = ({ children }) => (
  <div className='core-layout-styles'>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
