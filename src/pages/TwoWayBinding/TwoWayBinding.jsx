import React, { Component } from "react";

export default class TwoWayBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      age: "",
    };
  }

  handleValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div>
          <input
            name="firstname"
            value={this.state.firstName}
            onChange={this.handleValue}
          />
        </div>
        <div>
          <input
            name="age"
            value={this.state.age}
            onChange={this.handleValue}
          />
        </div>
        <p>Name: {this.state.firstName}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}
