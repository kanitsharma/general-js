import React from 'react'
import PropTypes from 'prop-types'
import { RotatingPlane } from 'better-react-spinkit'

const Loader = ({ loading }) =>
  <div>
    {loading &&
      <div className='loader-overlay'>
        <RotatingPlane size={100} color='#fff' />
      </div>
    }
  </div>

Loader.propTypes = {
  loading: PropTypes.bool
}

export default Loader
