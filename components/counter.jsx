import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../store/services/counter'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.handleIncrementCount = this.handleIncrementCount.bind(this)
    this.handleDecrementCount = this.handleDecrementCount.bind(this)
    this.handleResetCount = this.handleResetCount.bind(this)
  }

  handleIncrementCount() {
    const { dispatch } = this.props
    dispatch(incrementCount())
  }

  handleDecrementCount() {
    const { dispatch } = this.props
    dispatch(decrementCount())
  }

  handleResetCount() {
    const { dispatch } = this.props
    dispatch(resetCount())
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h1>
          {counter}
        </h1>
        <button type="button" onClick={this.handleIncrementCount}>
          +1
        </button>
        <button type="button" onClick={this.handleDecrementCount}>
          -1
        </button>
        <button type="button" onClick={this.handleResetCount}>
          Reset
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { counter } = state
  return { counter }
}

export default connect(mapStateToProps)(Counter)
