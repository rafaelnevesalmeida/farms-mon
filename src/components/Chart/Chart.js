import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { Container } from '../../elements'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class Chart extends React.Component {
  render () {
    const { data: { loading, error, sensorDataPerDate } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Container backgroundColor="#FFF" justifyContent="center" maxWidth="700px" >
        <LineChart
          width={600}
          height={300}
          data={sensorDataPerDate}
          margin={{top: 50, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" name="Temperature" dataKey="data" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </Container>
    )
  }
}

export default Chart
