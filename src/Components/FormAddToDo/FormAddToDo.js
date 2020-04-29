import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class formAddToDoComponent extends Component {
  state = { text: '' }
  constructor() {
    super();
  }
  add() {
    debugger;
    this.props.addText(this.state.text);
    this.setState({ text: '' });
  }
  inputHandler(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <form className="input-group md-form form-sm form-2 pl-0" onSubmit={this.add.bind(this)} >
        <input
          value={this.state.text}
          onChange={this.inputHandler.bind(this)}
          className="form-control my-0 py-1"
          type="text"
          placeholder="enter todo"
          aria-label="Search" />
        <div className="input-group-append">
          <span className="input-group-text  lighten-3" id="basic-text1">
            <button className="fa fa-plus-circle fa-lg" aria-hidden="true"></button></span>
        </div>
      </form>

    )
  }
}
export default formAddToDoComponent;