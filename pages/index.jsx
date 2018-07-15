import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/counter';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default connect()(HomePage);
