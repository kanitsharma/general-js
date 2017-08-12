/* eslint max-len: ["error", { "ignoreStrings": true }] */
import React from 'react'
import PropTypes from 'prop-types'
import Hheader from '../../components/hover-header'
import Swiftscroll from '../../components/swift-scroll'
import Landingsection from '../../components/landingsection'
import HeadingHero from '../../static/Orange Juice.jpeg'

const Home = ({ showNotifier }) =>
  <div>
    <Swiftscroll>
      <div>
        <Landingsection hpos='center' vpos='center' background='linear-gradient(to top, #6a11cb 0%, #6a11cb 100%)'>
          <Hheader
            htext='general/js'
            btext='Give your Javascript Project a new home'
            width='300'
            height='300'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation='true'
          />
        </Landingsection>
      </div>
    </Swiftscroll>
  </div>

Home.propTypes = {
  showNotifier: PropTypes.func
}

export default Home
