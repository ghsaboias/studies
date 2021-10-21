import React from 'react';
import Counter from './Counter';

export default class App extends React.Component {
  constructor() {
    super();

    this.mountComponent = this.mountComponent.bind(this);
    this.unmountComponent = this.unmountComponent.bind(this);
    this.state = {
      mounted: true,
    }
  }

  mountComponent = () => { this.setState({ mounted: true }); };
  unmountComponent = () => { this.setState({ mounted: false }); };

  render() {
    return (
      <div>
        { this.state.mounted ? <Counter /> : null }
        <button onClick={ this.mountComponent } disabled={ this.state.mounted }>Mount</button>
        <button onClick={ this.unmountComponent } disabled={ !this.state.mounted }>Unmount</button>
      </div>
    )
  }
}
