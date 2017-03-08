import React, { Component } from 'react';
import TextDisplayed from './TextDisplayed';

class TextDisplay extends Component {

  constructor() {
    super();

    this.state = {
      textDisplay: 'Hi',
    };
  }

  handleChange(e) {
    this.setState({
      textDisplay: e.target.value
    })
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Text"
          value={this.state.textDisplay}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplayed text={this.state.textDisplay} />
      </div>
    )
  }

}

export default TextDisplay;
