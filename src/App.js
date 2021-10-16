/** @format */
import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  Add = () => {
    console.log('add');
    this.setState((current) => ({ count: this.current.count + 1 }));
  };
  Subtract = () => {
    console.log('Subtract');
    this.setState((current) => ({ count: this.current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.Add}>Add</button>
        <button onClick={this.Subtract}>Subtract</button>
      </div>
    );
  }
}

export default App;
