import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
      super(props);
    
      this.state = {
        isNavOpen: false
      };
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
  render(){
  const show=(this.state.isNavOpen) ? "show" : "";
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
        <div class="container">
          <NavLink
            className="nav-link navbar-dark navbar-brand mr-auto"
            to="/home"
          >
            <strong>PORTFOLIO</strong>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#Navbar"
            onClick={()=>this.toggleNav()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + show} id="Navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./aboutus">
                  <span className="fa fa-info fa-lg"></span> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./skills">
                  <span className="fa fa-code fa-lg"></span> Skills & Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
  }
}
export default Navbar;
