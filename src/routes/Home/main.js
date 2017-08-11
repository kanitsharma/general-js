/* eslint max-len: ["error", { "ignoreStrings": true }] */
import React from 'react'
import PropTypes from 'prop-types'
import Hheader from '../../components/hover-header'
import Swiftscroll from '../../components/swift-scroll'
import Landingsection from '../../components/landingsection'

const Home = ({ showNotifier }) =>
  <div>
    <Swiftscroll>
      <div>
        <Landingsection hpos='center' vpos='center' background='linear-gradient(to top, #37ecba 0%, #72afd3 100%)'>
          <Hheader
            htext='General/Js'
            width='300'
            height='300'
            source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4dTrSDOjy7aQRYx-iBIBMyeTCQms7m1PCZG2c_Egr-pP1rCw'
            boxpos='end' hpos='center' hsize='80'
            animation='true' />
        </Landingsection>
        <Landingsection hpos='center' vpos='center' background='linear-gradient(to top, #007adf 0%, #00ecbc 100%)'>
          <h1 className='heading'>Home Of Opensource Javascript Projects</h1>
        </Landingsection>
      </div>
    </Swiftscroll>
  </div>

Home.propTypes = {
  showNotifier: PropTypes.func
}

export default Home
