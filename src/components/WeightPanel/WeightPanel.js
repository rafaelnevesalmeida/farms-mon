import React from 'react'
// import { FormattedMessage } from 'react-intl'
import { LabelInfo, Label, Container, Edit, Button } from '../../elements'

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
    const { sensorIndex, date, data: { loading, error, lastSensorDataBySensor } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Container backgroundColor="#4064AD" justifyContent="center" height="300px" width="300px" flexGrow="1" >
        {lastSensorDataBySensor.map((weight, i) =>
          <Container key={i} paddingLeft="10px" maxWidth="310px" >
            <Container paddingTop="30px" paddingBottom="20px" flexDirection="column" >
              <Container paddingBottom="30px">
                <Label align='left' fontSize="30px" >{this.props.location} </Label>
                <Label align='left' fontSize="30px" >{this.props.label}: </Label>
              </Container>

              <Container flexDirection='row' >
                <Label marginLeft='3px' align='right'>Chart date: </Label>
                <Button width='24px' marginLeft='15px' onClick={() => this.props.decDate(sensorIndex, date)}>
                  <Label>{'<'}</Label>
                </Button>
                <Edit
                  width='100px'
                  height='23px'
                  grow='0'
                  placeholder='Date'
                  value={this.formatDate(date)}
                  disabled
                />
                <Button width='24px' onClick={() => this.props.incDate(sensorIndex, date)}>
                  <Label>{'>'}</Label>
                </Button>
              </Container>
            </Container>
            <Container backgroundColor='#6286CF' flexDirection="row" >
              <Container height="100%" width="35%" >
                <Label >Last data:</Label>
                <Label >{this.formatDate(weight.date)}</Label>
                <Label >{this.formatTime(weight.time)}</Label>
              </Container>
              <Container height="100%" width="60%" alignItems="flex-end" >
                <LabelInfo>{weight.data}</LabelInfo>
                <Container height="100%" width="auto" paddingBottom="10px" >
                  <Label>{this.props.type}</Label>
                </Container>
              </Container>
            </Container>
          </Container>
        )}
      </Container>
    )
  }
}

export default Bed
