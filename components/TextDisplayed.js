import React, { Component } from 'react';

class TextDisplayed extends Component {

  handleClick() {
    this.props.deleteLetterFunc()
  }

  render() {
    return (
      <div>
        <div>
          I will display your input parent text {this.props.text}
        </div>
        <br/>
        <button onClick={this.handleClick.bind(this)}>
          Check me out
        </button>
      </div>
    )
  }
}

export default TextDisplayed;
