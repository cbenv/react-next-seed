import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import Counter from '../components/counter'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
      </div>
    )
  }
}

export default connect()(HomePage)
