import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WeightPanel from './WeightPanel.js'

export const lastWeightQuery = gql`
  query lastSensorData {
    lastSensorData {
      data
    }
  }
`

/* export const allWeightsQuery = gql`
  query allWeights {
    allWeights {
      id
      stationId
      weight
      date
      time
    }
  }
` */

export default graphql(lastWeightQuery, {
  options: { pollInterval: 5000 } // TODO move it to config
})(WeightPanel)
