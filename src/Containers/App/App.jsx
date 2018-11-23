/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Counter from "Components/Counter";
import { increment, decrement, incrementAsync } from "Actions";
import { bindActionCreators, compose } from "redux";

class App extends Component {
  increment = () => this.props.actions.increment();

  decrement = () => {
    this.props.actions.decrement();
  };

  incrementAsync = () => {
    this.props.actions.incrementAsync();
  };

  render() {
    return (
      <div>
        <Counter
          value={this.props.count}
          Increment={this.increment}
          Decrement={this.decrement}
          IncrementAsync={this.incrementAsync}
        />
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.number,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      increment,
      decrement,
      incrementAsync
    },
    dispatch
  )
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
