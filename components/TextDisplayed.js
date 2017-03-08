import React, { Component } from 'react';

class TextDisplayed extends Component {

  render() {
    return (
      <div>
        I will display your input parent text {this.props.text}
      </div>
    )
  }

}

export default TextDisplayed;
