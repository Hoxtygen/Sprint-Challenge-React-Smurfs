import React, { Component } from 'react';
import axios from "axios"

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
    .then(res =>console.log(res)
    )
    .catch(err => console.log(err))
};

  render() {
    return (
      <div className="SmurfForm">
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
      </div>
    );
  }
}

export default SmurfForm;
