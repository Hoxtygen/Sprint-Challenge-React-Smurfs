import React, { Component } from 'react'
import Smurf from "./Smurf";
import axios from "axios";

export default class SingleSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: []
        }
    }

    componentDidMount() {
        this.fetchSmurf(this.props.match.params.id)
      }
    
      componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id){
          this.fetchMovie(newProps.match.params.id);
        }
      }
    
      fetchSmurf = async(id) => {          
        try {
            const smurfsData = await axios.get(`http://localhost:3333/smurfs/${id}`);
        this.setState({
          smurf: smurfsData.data
        })
        //debugger
        } catch (error) {
            console.log(error);
            
        }
       
      }


    render() {
        const { name, age, height, id } = this.state.smurf;                
        return (
            <div>
             <Smurf 
             name = {name}
             age = {age}
             height = {height}
             handleDelete = {() =>this.props.handleDelete(id)}
             />
            </div>
        )
    }
}
