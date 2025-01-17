import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
     <SmurfContainer>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to = {`/smurfs/${smurf.id}`}  key={smurf.id}> <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                handleDelete = {this.props.handleDelete}
              />
               </Link>
            );
          })}
        </ul>
      </SmurfContainer>
     
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

const SmurfContainer = styled.div `
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  /* ul  {
    display: flex;
    flex-flow:wrap;
    margin: 0 auto;
  } */

  div {
    min-width: 30%;
    background-color: mediumseagreen;
  }
  a {
    text-decoration: none;
  }
`







export default Smurfs;
