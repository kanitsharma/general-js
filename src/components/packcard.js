import React from 'react'
import PT from 'prop-types' // eslint-disable-line
import { LineChart, Line } from 'recharts'

export const SampleGraph = ({ data, width, height }) =>
  <LineChart width={width} height={height} data={data}
    margin={{ top: 5 }}>
    <defs>
      <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='5%' stopColor='#486AB2' stopOpacity={1} />
        <stop offset='95%' stopColor='#486AB2' stopOpacity={1} />
      </linearGradient>
    </defs>
    <Line type='basis' dataKey='downloads' stroke='#fcfcfc' />
  </LineChart>

SampleGraph.propTypes = {
  data: PT.array,
  width: PT.number,
  height: PT.number
}

const PackCard = ({ name, data }) =>
  <div className='card-outside'>
    <div className='card-body'>
      <div className='card-top'>
        <div className='card-heading'>{name}</div>
        <div>34⭐️/10🍴</div>
      </div>
      <div className='card-desc'>
        Retask is a simple task queue implementation written for human beings. It provides generic solution to
        create and manage task queues.
      </div>
    </div>
    <SampleGraph data={data} height={100} width={270} />
  </div>

PackCard.propTypes = {
  name: PT.string,
  data: PT.array
}

export default PackCard
