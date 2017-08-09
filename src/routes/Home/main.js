import React from 'react'
import PropTypes from 'prop-types'
import Hheader from '../../components/hover-header'

const Home = ({ showNotifier }) =>
  <div>
    <Hheader
      htext='General/Js'
      width='300'
      height='300'
      source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4dTrSDOjy7aQRYx-iBIBMyeTCQms7m1PCZG2c_Egr-pP1rCw'
      boxpos='end' hpos='center' hsize='80'
      animation={true} />
  </div>

Home.propTypes = {
  showNotifier: PropTypes.func
}

export default Home
