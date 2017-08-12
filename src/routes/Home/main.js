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
        <Landingsection hpos='center' vpos='center' background='linear-gradient(to top, #44107A 0%, #231557 100%)'>
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
        <Landingsection hpos='center' vpos='center' background='linear-gradient(to top, #FF1361 0%, #44107A 100%)'>
          <Hheader
            htext='Shinobi'
            vtext='rajatsharma305/shinobi'
            btext='Ninjaic Starter for Redux'
            width='300'
            height='300'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation='false'
          />
        </Landingsection>
      </div>
    </Swiftscroll>
  </div>

Home.propTypes = {
  showNotifier: PropTypes.func
}
// background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
export default Home
