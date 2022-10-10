import { Component, Fragment } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({
      counter: this.state.counter <= 0 ? 0 : this.state.counter - 1,
    });
  }

  reset() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <Fragment>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark border border-white">
          <h1 className="text-center text-primary mb-5">Counter App</h1>
          <div className="border border-white p-5">
            <h2 className="text-center text-white m-5">
              Count : {this.state.counter}
            </h2>
            <div className="m-5">
              <button
                onClick={this.increment}
                type="button"
                class="btn btn-success btn-lg m-5"
              >
                Increment
              </button>

              <button
                disabled={this.state.counter === 0 ? true : false}
                type="button"
                class="btn btn-primary btn-lg m-5"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                disabled={this.state.counter === 0 ? true : false}
                type="button"
                class="btn btn-danger btn-lg m-5"
                onClick={this.decrement}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
