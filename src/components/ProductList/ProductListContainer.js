import React, { Component } from "react";
import ProductList from "./ProductList";
import "./productList.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/userReducer";

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="product-list-head">
          {this.props.user ? "All of our products" : "Log in to see products"}
        </h1>
        {this.props.isLoggedIn ? (
          <ProductList />
        ) : (
          <div className="form">
            <input
              name="userInput"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <button onClick={this.props.loginUser(this.state.userInput)}>
              Sign In
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return reduxState.user;
};

export default connect(mapStateToProps, { loginUser })(ProductListContainer);
