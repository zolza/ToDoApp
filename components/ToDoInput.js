import React, { Component } from 'react';

class ToDoInput extends Component {

  constructor() {
    super();

    this.state = {
      inputText: '',
    };
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type in your todo"
          value={this.state.textDisplay}
          onChange={this.handleChange.bind(this)}
        />
        <button>Submit</button>
      </div>
    )
  }

}

export default ToDoInput;
