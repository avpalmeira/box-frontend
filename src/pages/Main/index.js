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
    const response = await api.post('box', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  }

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  }

  render() {
    return (
      <div id='main-container'>
        <form onSubmit={this.handleSubmit}>
          <img src={logo}/>
          <input
            placeholder='Criar Box'
            value={this.state.newBox}
            onChange={this.handleInputChange}/>
          <button type='submit'>Criar</button>
        </form>
      </div>
    );
  }
}

export default Main;
