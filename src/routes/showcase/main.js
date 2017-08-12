import React from 'react'
import Landingsection from '../../components/landingsection'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import Hheader from '../../components/hover-header'
import HeadingHero from '../../static/Orange Juice.jpeg'

const Showcase = () =>
  <div>
    <Landingsection hpos='center' vpos='center' background='linear-gradient(to top, #FF1361 0%, #44107A 100%)'>
      <Gridcomponent>
        <Gridsection column='1 / 2' row='1'>
          <Hheader
            htext='Shinobi'
            vtext='rajatsharma305/shinobi'
            btext='Ninjaic Starter for Redux'
            width='270'
            height='270'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation={false}
          />
        </Gridsection>
        <Gridsection column='2 / 3' row='1'>
          <Hheader
            htext='Shinobi'
            vtext='rajatsharma305/shinobi'
            btext='Ninjaic Starter for Redux'
            width='270'
            height='270'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation={false}
          />
        </Gridsection>
        <Gridsection column='3 / 4' row='1'>
          <Hheader
            htext='Shinobi'
            vtext='rajatsharma305/shinobi'
            btext='Ninjaic Starter for Redux'
            width='270'
            height='270'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation={false}
          />
        </Gridsection>
        <Gridsection column='1 / 2' row='2'>
          <Hheader
            htext='Shinobi'
            vtext='rajatsharma305/shinobi'
            btext='Ninjaic Starter for Redux'
            width='270'
            height='270'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation={false}
          />
        </Gridsection>
        <Gridsection column='2 / 3' row='2'>
          <Hheader
            htext='Shinobi'
            vtext='rajatsharma305/shinobi'
            btext='Ninjaic Starter for Redux'
            width='270'
            height='270'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation={false}
          />
        </Gridsection>
        <Gridsection column='3 / 4' row='2'>
          <Hheader
            htext='Shinobi'
            vtext='rajatsharma305/shinobi'
            btext='Ninjaic Starter for Redux'
            width='270'
            height='270'
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='80'
            animation={false}
          />
        </Gridsection>
      </Gridcomponent>
    </Landingsection>
  </div>

export default Showcase
