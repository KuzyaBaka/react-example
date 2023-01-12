import React, { Component } from "react";

export default class WtfClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: {},
      refresh: false,
    };
  }

  componentDidMount() {
    fetch("https://yesno.wtf/api")
      .then((res) => res.json())
      .then((data) => this.setState({ yes: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reload !== this.state.reload) {
      fetch("https://yesno.wtf/api")
        .then((res) => res.json())
        .then((data) => this.setState({ yes: data }));
    }
  }

  handleRefresh = () => {
    this.setState({ refresh: !this.state.reload });
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.state.yes.image} alt="yes" />
        </div>
        <h1>{this.state.yes.answer}</h1>
        <button onClick={this.handleRefresh}>refresh</button>
      </div>
    );
  }
}
