import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class App extends Component {

  render() {
    return (
      <div className='app'>
        This! is text.
        <TextDisplay />
      </div>
    );
  }

}

export default App;
