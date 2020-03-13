import React, { Component } from "react";
import Logo from "../../logo.jpeg";

export default class extends Component {
  render = () => (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container">
        <span className="navbar-brand">
          <img src={Logo} alt="logo" className="mr-2" width="50" height="50" />
          <div className="d-md-inline-block d-none">
            <div className="align-middle d-inline">Royal Stats</div>
          </div>
        </span>
        <div className="ml-auto">
          <div className="row">
            <div className="col-6">
              <div className="d-inline-block">
                <i className="fal fa-search align-middle"></i>
              </div>
            </div>
            <div className="col-6">
              <button
                className="navbar-toggler ml-auto border-0 d-block"
                type="button"
                onClick={this.props.toggleSidebar}
              >
                <i className="fal fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
