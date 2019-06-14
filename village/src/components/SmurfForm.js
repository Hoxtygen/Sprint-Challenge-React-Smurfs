import React, { Component } from 'react';
import axios from "axios"
import styled from "styled-components";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSmurf = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3333/smurfs/", {
      name: this.state.name,
      height: this.state.height,
      age: this.state.age
    })
    .then(res => {
      this.props.history.push('/');
      this.props.fetchData();
    })
    .catch(err => console.log(err))
};

  render() {
    return (
      <FormWrapper>
        <h1>Add New Smurf</h1>
        <form onSubmit={this.handleAddSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div `
  border: 1px solid red;
  width: 40%;
  margin: 50px auto;


  form  {
    display: flex;
    flex-direction: column;
  }
  input {
    display: block;
    height: 40px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 1.2rem;
    outline: none;
  }

  button {
    margin-top: 10px;
    height: 35px;
    font-size: 1.2rem;
    background-color: #ccc;
    color: #222;
  }
`

export default SmurfForm;
