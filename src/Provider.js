import React from 'react'

import Context from './Context'

export class ContextProvider extends React.Component {
  constructor () {
    super()
    this.state = {
      lang: 'en'
    }
  }

  render () {
    return (
      <Context.Provider value={{
        ...this.state
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider
