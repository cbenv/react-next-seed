import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import Counter from '../components/counter'

class HomePage extends Component {
  render() {
    const { store } = this.props
    return (
      <div>
        <Header store={store} />
        <Counter store={store} />
      </div>
    )
  }
}

export default connect()(HomePage)
