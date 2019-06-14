import React, { Component } from 'react';
import axios from "axios";
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.fetchData()
  }

    fetchData =  async() => {
      this.setState({ spinner: true });
      try {
        const smurfsData = await axios.get('http://localhost:3333/smurfs');
        this.setState({
          smurfs: smurfsData.data
        })
        //debugger
      } catch (e) {
        this.setState({
          errorMessage: e.message
        })

      }
    }


  handleDelete = async(id) => {
    try {
      const SmurfList = await axios.delete(`http://localhost:3333/smurfs/${id}`)
      this.fetchData()
    } catch (e) {
      this.setState({
        errorMessage: e.message
      })
    }
  }
  


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path = "/"  render = {props =>  <Smurfs smurfs={this.state.smurfs} handleDelete = {this.handleDelete}/>} />
        <Route exact path = "/smurf-form" component = {SmurfForm}/>
      </div>
      </Router>
    );
  }
}

export default App;
