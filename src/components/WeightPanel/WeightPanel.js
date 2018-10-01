import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { Label, LabelInfo, Container } from '../../elements'

class Bed extends React.Component {
  render () {
    const { data: { loading, error, lastWeight } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Container >
        {lastWeight.map((weight, i) =>
          <Container key={i} height='200px' width='500px' marginTop='200px' marginLeft='100px' flexDirection='col' >
            <Label>Weight: </Label>
            <LabelInfo>{weight.weight}</LabelInfo>
            <Label>Kg</Label>
          </Container>
        )}
      </Container>
    )

    /* return (
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
    ) */
  }
}

export default Bed
