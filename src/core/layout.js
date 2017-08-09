import React from 'react'
import { IndexLink, Link } from 'react-router' // eslint-disable-line
import PropTypes from 'prop-types'
import Notifier from '../connectors/notifier'

export const CoreLayout = ({ children }) => (
  <div className='core-layout-styles'>
    <Notifier />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
