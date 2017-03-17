import React, { Component } from 'react';
import TextDisplayed from './TextDisplayed';

class TextDisplay extends Component {

  constructor() {
    super();

    this.state = {
      textDisplay: 'Hi',
    };
  }

  deleteLetter() {
    this.setState({
      textDisplay: this.state.textDisplay.substring(0, this.state.textDisplay.length -1)
    })
  }

  handleChange(e) {
    this.setState({
      textDisplay: e.target.value
    })
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
        <TextDisplayed text={this.state.textDisplay} deleteLetterFunc={this.deleteLetter.bind(this)}/>
      </div>
    )
  }

}

export default TextDisplay;
