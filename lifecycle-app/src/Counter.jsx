import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
  
    console.log('constructor');
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.state = {
      counter: 0,
    }
  }

  incrementCounter = () => { this.setState({ counter: this.state.counter + 1 }) };
  decrementCounter = () => { this.setState({ counter: this.state.counter - 1 }) };

  componentDidMount() {
    console.log('mounted');
    console.log('---------')
  }

  componentWillUnmount() {
    console.log('unmounted');
    console.log('---------')
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Counter: { this.state.counter }</h1>
        <button onClick={ this.incrementCounter }>Increment</button>
        <button onClick={ this.decrementCounter }>Decrement</button>
      </div>
    )
  }
}
