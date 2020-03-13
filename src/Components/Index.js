import React, { Component } from "react";


export default class extends Component {
  render = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        <button
          className="navbar-toggler mr-2 border-0"
          type="button"
          onClick={this.props.toggleSidebar}
        >
          <span className="navbar-toggler-icon" />
        </button>
        Royal Stats
      </span>
    </nav>
  );
}
