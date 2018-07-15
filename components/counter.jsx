import React, { Component } from 'react';
import { connect } from 'react-redux';
import counterService from '../store/services/counter';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    const { dispatch } = this.props;
    dispatch(counterService.incrementCount());
  }

  decrementCount() {
    const { dispatch } = this.props;
    dispatch(counterService.decrementCount());
  }

  resetCount() {
    const { dispatch } = this.props;
    dispatch(counterService.decrementCount());
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>
          {counter}
        </h1>
        <button type="button" onClick={this.incrementCount}>
          +1
        </button>
        <button type="button" onClick={this.decrementCount}>
          -1
        </button>
        <button type="button" onClick={this.decrementCount}>
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mapStateToProps)(Counter);
