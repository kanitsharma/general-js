import React from 'react'
import PropTypes from 'prop-types'

const Gridsection = ({ column, row, children }) => {
  const gridSection = {
    gridColumn: column,
    gridRow: row
  }
  return (
    <div style={gridSection}>
      {children}
    </div>
  )
}

Gridsection.propTypes = {
  column: PropTypes.string,
  row: PropTypes.string,
  children: PropTypes.element
}

export default Gridsection
