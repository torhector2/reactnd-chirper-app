import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

//no need to pass state, we just want dispatch so there's no need to pass any param to connect()
export default connect()(App)