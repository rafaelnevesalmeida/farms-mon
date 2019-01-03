import React from 'react'
// import { FormattedMessage } from 'react-intl'
import { LabelInfo, Label, Container } from '../../elements'

class Bed extends React.Component {
  // TODO move it to another file
  formatTime (time) {
    let newTime = time.substr(0, 2)
    newTime = newTime.concat(':', time.substr(2, 2), ':', time.substr(4, 2))
    return newTime
  }

  formatDate (date) {
    let newDate = date.substr(6, 2)
    newDate = newDate.concat('-', date.substr(4, 2), '-', date.substr(0, 4))
    return newDate
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
      <Container backgroundColor="#1234DD" justifyContent="center" maxWidth="200px" >
        {lastSensorDataBySensor.map((weight, i) =>
          <Container key={i} maxWidth="400px" >
            <Container marginleft="10px" paddingTop="22px" >
              <Label align='right' >{this.props.label}: </Label>
              <Label align='right' >{this.formatDate(weight.date)}</Label>
              <Label align='right' >{this.formatTime(weight.time)}</Label>
            </Container>
            <Container marginleft="10px" alignItems="flex-end">
              <LabelInfo>{weight.data}</LabelInfo>
              <Container height="100%" width="auto" paddingBottom="22px" >
                <Label>{this.props.type}</Label>
              </Container>
            </Container>
          </Container>
        )}
      </Container>
    )
  }
}

export default Bed
