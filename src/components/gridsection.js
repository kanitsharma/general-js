import React from 'react'
import PropTypes from 'prop-types'

const Gridsection = ({ column, row, children }) => {
  const gridSection = {
    gridColumn: column,
    gridRow: row,
  }
  const subcontainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div style={gridSection}>
      <div style={subcontainer}>
        {children}
      </div>
    </div>
  )
}

Gridsection.propTypes = {
  column: PropTypes.string,
  row: PropTypes.string,
  children: PropTypes.element
}

export default Gridsection
