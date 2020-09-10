import React, { Component } from "react";
import { connect } from "react-redux";
import { counterAction } from "../store/counterAction";

class AddToCart extends Component {
  render() {
    console.log(this.props);
    return (
      <h1 onClick={() => this.props.counterAction(this.props.count + 1)}>
        Your cart count is {this.props.count}
      </h1>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count.count,
});
const mapDispatchToProps = {
  counterAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);

// function calPrice() {
//     return () => {

//     }
// }

// const totalVal = calPrice()

// totalVal()
// calPrice()()
