import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState({
      total: calculate.total,
      next: calculate.next,
      operation: calculate.operation,
    });
  };

  render() {
    return (
      <div className="App">
        <Display result={this.state.next} />
        <ButtonPanel calculate={calculate} onClick={() => this.handleClick()} />
      </div>
    );
  }
}

export default App;
