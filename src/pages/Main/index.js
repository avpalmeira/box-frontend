import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

class Main extends Component {

  state = {
    newBox: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('boxes', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  }

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  }

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt=""/>
          <input
            placeholder="Criar Box"
            onChange={this.handleInputChange}/>
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}

export default Main;
