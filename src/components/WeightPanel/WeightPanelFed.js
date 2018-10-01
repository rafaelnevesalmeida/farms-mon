import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WeightPanel from './WeightPanel.js'

export const lastWeightQuery = gql`
  query lastWeight {
    lastWeight {
      weight
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
  options: { pollInterval: 1000 }
})(WeightPanel)
