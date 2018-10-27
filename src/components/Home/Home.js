// eslint-disable-next-line
import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from '../../messages'

import { WeightPanel } from '../../components'

import {
  Header,
  Container,
  Label
} from '../../elements'

addLocaleData(en)
addLocaleData(pt)

const Home = ({ lang }) => {
  return ( // TODO change the visual props (backgroundColor) to modifier and move IntlProvider to App.js
    <IntlProvider locale={lang} messages={messages[lang]} >
      <Container backgroundColor='#888888' height="100%">
        <Header paddingTop="5px">
          <Label>
            <FormattedMessage id='app.label' />
          </Label>
        </Header>
        <WeightPanel label='temperature' type='C' sensorId='1' />
        <WeightPanel label='humitidy' type='%' sensorId='2' />
      </Container>
    </IntlProvider>
  )
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
