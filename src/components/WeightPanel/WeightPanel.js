import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { LabelInfo, Label, Container } from '../../elements'

class Bed extends React.Component {
  formatTime (time) {
    let newTime = time.substr(0, 2)
    newTime = newTime.concat(':', time.substr(2, 2), ':', time.substr(4, 2))
    return newTime
  }

  render () {
    const { data: { loading, error, lastSensorDataBySensor } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Container backgroundColor="#1234DD" justifyContent="center">
        {lastSensorDataBySensor.map((weight, i) =>
          <Container key={i} maxWidth="400px" >
            <Container maxWidth="100px" paddingTop="22px" justifyContent="flex-end">
              <Label align='right' >{this.props.label}: </Label>
              <Label align='right' >{this.formatTime(weight.time)}</Label>
            </Container>
            <Container marginleft="20px" width="auto" alignItems="flex-end">
              <LabelInfo>{weight.data}</LabelInfo>
              <Container height="100%" width="auto" paddingBottom="22px" >
                <Label>{this.props.type}</Label>
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
