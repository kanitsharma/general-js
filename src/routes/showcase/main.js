import React, { Component } from 'react'
import PT from 'prop-types'
import Landingsection from '../../components/landingsection'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import Hheader from '../../components/hover-header'
import HeadingHero from '../../static/Orange Juice.jpeg'
import { AreaChart, Area } from 'recharts'

const SampleGraph = ({ data }) =>
  <div style={{ backgroundColor: `#00c6fb` }}>
    <AreaChart width={270} height={270} data={data}
      margin={{ top: 5 }}>
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#43e97b' stopOpacity={1} />
          <stop offset='95%' stopColor='#38f9d7' stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area type='monotone' dataKey='downloads' stroke='#43e97b' fillOpacity={1} fill='url(#colorUv)' />
    </AreaChart>
  </div>

SampleGraph.propTypes = {
  data: PT.array
}

class Showcase extends Component {
  componentDidMount () {
    this.props.getfamous()
  }
  render () {
    const { jqueryDownload, vueDownload, reactDownload, angularDownload } = this.props
    return <div>
      <Landingsection hpos='center' vpos='center' background='linear-gradient(to top, #FF1361 0%, #44107A 100%)'>
        <Gridcomponent>
          <Gridsection column='1 / 2' row='1'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='270'
              height='270'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='80'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='2 / 3' row='1'>
            <Hheader
              htext='vue'
              vtext='vuejs/vue'
              btext='A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
              width='270'
              height='270'
              component={vueDownload ? <SampleGraph data={vueDownload} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='80'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='1 / 2' row='2'>
            <Hheader
              htext='react'
              vtext='facebook/react'
              btext='A declarative, efficient, and flexible JavaScript library...'
              width='270'
              height='270'
              component={reactDownload ? <SampleGraph data={reactDownload} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='80'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='2 / 3' row='2'>
            <Hheader
              htext='angular'
              vtext='angular/angular'
              btext='One framework. Mobile & desktop.'
              width='270'
              height='270'
              component={angularDownload ? <SampleGraph data={angularDownload} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='80'
              animation={false}
            />
          </Gridsection>
        </Gridcomponent>
      </Landingsection>
    </div>
  }
}

Showcase.propTypes = {
  getfamous: PT.function,
  jqueryDownload: PT.array,
  reactDownload: PT.array,
  angularDownload: PT.array,
  vueDownload: PT.arra
}
export default Showcase
