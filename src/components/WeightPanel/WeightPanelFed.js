import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WeightPanel from './WeightPanel.js'

export const lastSensorDataBySensorQuery = gql`
  query lastSensorDataBySensor($sensorId: Int) {
    lastSensorDataBySensor (sensorId: $sensorId) { 
      data
      time
    }
  }
`

export default graphql(lastSensorDataBySensorQuery, {
  options: ({ sensorId }) => ({
    variables: { sensorId: sensorId },
    pollInterval: 15000 // TODO move it to config}
  })
})(WeightPanel)
