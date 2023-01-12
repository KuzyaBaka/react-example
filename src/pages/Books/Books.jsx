import React, { Component } from "react";
import "./Books.css";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  handleCode = (e) => {
    this.setState({status: e.target.value})
  }

  render() {
    return (
      <div className="container">
        <div>
          <input onChange={this.handleCode} />
        </div>
        {this.state.status && (
          <div>
            <img src={`https://http.cat/${this.state.status}`} alt="cat" />
          </div>
        )}
      </div>
    );
  }
}
