import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { LabelInfo, Label, Container } from '../../elements'

class Bed extends React.Component {
  render () {
    const { data: { loading, error, lastSensorData } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Container backgroundColor="#1234DD" justifyContent="center">
        {lastSensorData.map((weight, i) =>
          <Container key={i} maxWidth="400px" >
            <Container maxWidth="fit-content" paddingTop="22px" justifyContent="center">
              <Label>Weight: </Label>
            </Container>
            <Container width="auto" alignItems="flex-end">
              <LabelInfo>{weight.data}</LabelInfo>
              <Container height="100%" width="auto" paddingBottom="22px" >
                <Label>Kg</Label>
              </Container>
            </Container>
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
/*

            <Label>Weight: </Label>
            <LabelInfo>{weight.data}</LabelInfo>
            <Label>Kg</Label>
*/
