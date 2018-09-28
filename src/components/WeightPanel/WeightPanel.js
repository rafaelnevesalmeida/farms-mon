import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { LabelInfo, Container } from '../../elements'

class Bed extends React.Component {
  render () {
    const { data: { loading, error, allWeights } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Container >
        {allWeights.map((weight, i) =>
          <Container key={i} height='30px'>
            <LabelInfo>Id: {weight.id} | </LabelInfo>
            <LabelInfo>Weight: {weight.weight} | </LabelInfo>
            <LabelInfo>Station: {weight.stationId} | </LabelInfo>
            <LabelInfo>Date: {weight.date} | </LabelInfo>
            <LabelInfo>Time: {weight.time}</LabelInfo>
          </Container>
        )}
      </Container>
    )
  }
}

export default Bed
