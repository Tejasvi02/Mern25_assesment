//Uncontrolled way Component
import React, { Component, createRef } from "react";

export class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.passwordRef = createRef();
    this.mobileRef = createRef();

    this.state = {
      userName: "",
      password: "",
      mobile: "",
      showData: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      userName: this.userNameRef.current.value,
      password: this.passwordRef.current.value,
      mobile: this.mobileRef.current.value,
      showData: true
    });
  };

  render() {
    let displayInfo = null;
    if (this.state.showData) {
      displayInfo = (
        <div className="mt-3">
          <p><b>User Name:</b> {this.state.userName}</p>
          <p><b>Password:</b> {this.state.password}</p>
          <p><b>Mobile:</b> {this.state.mobile}</p>
        </div>
      );
    }

    return (
      <>
        <h3>User Sign In (Uncontrolled)</h3>
        <form className="form col-md-12" onSubmit={this.handleSubmit}>
          <div className="form-control">
            <b>User Name</b>
            <input type="text" className="form-control" placeholder="Enter User Name" ref={this.userNameRef} required />
          </div>
          <div className="form-control">
            <b>Password</b>
            <input type="password" className="form-control" placeholder="Enter Password" ref={this.passwordRef} required/>
          </div>
          <div className="form-control">
            <b>Mobile</b>
            <input  type="text" className="form-control" placeholder="Enter Mobile" ref={this.mobileRef} required />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </div>
        </form>

        {displayInfo}
      </>
    );
  }
}
