import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WeightPanel from './WeightPanel.js'

export const allWeightsQuery = gql`
  query allWeights {
    allWeights {
      id
      stationId
      weight
      date
      time
    }
  }
`

export default graphql(allWeightsQuery, {
  options: { pollInterval: 1000 }
})(WeightPanel)
