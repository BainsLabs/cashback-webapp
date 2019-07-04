import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  renderLander() {
    return (
      <div className="lander">
        <h1>Cashback</h1>
        <p>Affilation program</p>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderLander() : <p>Welcome</p>}
      </div>
    );
  }
}
