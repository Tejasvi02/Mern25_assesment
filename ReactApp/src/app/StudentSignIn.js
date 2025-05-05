import React, { Component } from "react";
//Controlled Component
export class StudentSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      mobile: "",
      showData: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignIn = (event) => {
    event.preventDefault();
    this.setState({ showData: true });
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
        <h3>Student Sign In (Controlled)</h3>
        <div className="form col-md-12">
          <div className="form-control">
            <b>User Name</b>
            <input type="text"name="userName" className="form-control" value={this.state.userName} onChange={this.handleChange} placeholder="Enter User Name" required/>
          </div>
          <div className="form-control">
            <b>Password</b>
            <input  type="password" name="password" className="form-control" value={this.state.password}  onChange={this.handleChange}  placeholder="Enter Password"  required/>
          </div>
          <div className="form-control">
            <b>Mobile</b>
            <input  type="text"  name="mobile"  className="form-control"  value={this.state.mobile}  onChange={this.handleChange}  placeholder="Enter Mobile"  required/>
          </div>
          <div className="form-control">
            <button className="btn btn-primary mt-2" onClick={this.handleSignIn}>
              Sign In
            </button>
          </div>
        </div>

        {displayInfo}
      </>
    );
  }
}
