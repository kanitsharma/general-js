import React, { Component } from 'react'
import PT from 'prop-types'
import Landingsection from '../../components/landingsection'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import Swiftscroll from '../../components/swift-scroll'
import Hheader from '../../components/hover-header'
import HeadingHero from '../../static/Orange Juice.jpeg'
import { AreaChart, Area } from 'recharts'

const SampleGraph = ({ data, width, height }) =>
  <div style={{ backgroundColor: `#00c6fb` }}>
    <AreaChart width={width} height={height} data={data}
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
  data: PT.array,
  width: PT.number,
  height: PT.number
}

class Showcase extends Component {
  componentDidMount () {
    this.props.getfamous()
  }
  render () {
    const bgcolor = {
      background: '#44107A no-repeat fixed center'
    }
    const { jqueryDownload, vueDownload, reactDownload, angularDownload } = this.props
    return <div style={bgcolor}>
      <Landingsection hpos='center' vpos='top' size='40vh'>
        <Gridcomponent templatecolumn='1fr 1fr' templaterow='1fr'>
          <Gridsection column='1 / 2' row='1'>
            <Hheader
              htext='vue'
              vtext='vuejs/vue'
              btext='A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
              width='270'
              height='270'
              component={vueDownload
                ? <SampleGraph data={vueDownload} width={270} height={270} /> : null}
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
              component={vueDownload
                ? <SampleGraph data={vueDownload} width={270} height={270} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='80'
              animation={false}
            />
          </Gridsection>
        </Gridcomponent>
      </Landingsection>
      <Landingsection hpos='center' vpos='center' size='100vh'>
        <Gridcomponent templatecolumn='1fr 1fr 1fr 1fr 1fr' templaterow='1fr 1fr'>
          <Gridsection column='1 / 2' row='1'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='2 / 3' row='1'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='3 / 4' row='1'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='1 / 2' row='2'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='2 / 3' row='2'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='3 / 4' row='2'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='1 / 2' row='3'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='2 / 3' row='3'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
          <Gridsection column='3 / 4' row='3'>
            <Hheader
              htext='jquery'
              vtext='jquery/jquery'
              btext='jQuery JavaScript Library'
              width='200'
              height='200'
              component={jqueryDownload ? <SampleGraph data={jqueryDownload} width={200} height={200} /> : null}
              source={HeadingHero}
              boxpos='start' hpos='center' hsize='50'
              animation={false}
            />
          </Gridsection>
        </Gridcomponent>
      </Landingsection>
    </div>
  }
}

Showcase.propTypes = {
  getfamous: PT.func,
  jqueryDownload: PT.array,
  reactDownload: PT.array,
  angularDownload: PT.array,
  vueDownload: PT.array
}
export default Showcase
