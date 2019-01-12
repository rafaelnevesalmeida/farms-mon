// eslint-disable-next-line
import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from '../../messages'

import { Chart, WeightPanel } from '../../components'

import {
  Header,
  Container,
  Label
} from '../../elements'

addLocaleData(en)
addLocaleData(pt)

class Home extends React.Component {
  // const Home = ({ lang }) => {
  currentDate () {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    let newDate = ''
    newDate = newDate.concat(year, month, day)
    console.log(newDate)
    return newDate
  }

  render () {
    const { lang } = this.props

    return ( // TODO change the visual props (backgroundColor) to modifier and move IntlProvider to App.js
      <IntlProvider locale={lang} messages={messages[lang]} >
        <Container backgroundColor='#888888' >
          <Header paddingTop="5px">
            <Label>
              <FormattedMessage id='app.label' />
            </Label>
          </Header>
          <Container justifyContent="center" marginBottom="10px" >
            <WeightPanel label='Air temperature' type='°C' sensorId='1' />
            <Chart sensorId='1' dataType='Temperature' date={this.currentDate()} />
          </Container>
          <Container justifyContent="center" marginBottom="10px" >
            <WeightPanel label='Air  humidity' type='%' sensorId='2' />
            <Chart sensorId='2' dataType='Humidity' date={this.currentDate()} />
          </Container>
          <Container justifyContent="center" marginBottom="10px" >
            <WeightPanel label='Soil temperature' type='°C' sensorId='3' />
            <Chart sensorId='3' dataType='Temperature' date={this.currentDate()} />
          </Container>
          <Container justifyContent="center" marginBottom="10px" >
            <WeightPanel label='Soil humidity' type='%' sensorId='4' />
            <Chart sensorId='4' dataType='Humidity' date={this.currentDate()} />
          </Container>
        </Container>
      </IntlProvider>
    )
  }
}

export default Home
/*      <Container flexWrap='null' flexDirection='column' backgroundColor='#448866'>
        <Header>
          <Label>
            <FormattedMessage id='app.label' />
          </Label>
        </Header>
        <Container justifyContent='space-between'>
          <SidePanel />
          <Center>
            <WeightPanel />
          </Center>
          <SidePanel />
        </Container>
        <Footer />
      </Container> */
