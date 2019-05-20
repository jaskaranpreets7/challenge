import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from './form';



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      email: '',
      phone: '',
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  handleFormSubmit = (event) => {
    console.log('Form data' , this.state);
  }
  

  render() {
    return (
      <div className="app">
        <h1>{this.props.name}</h1>
        <Form
          handleChange={this.handleChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}


Profile.propTypes = {
    name: PropTypes.string.isRequired
}

export default Profile;

