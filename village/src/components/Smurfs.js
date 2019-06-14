import React, { Component } from 'react';
import styled from "styled-components";

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <SmurfContainer>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                handleDelete = {this.props.handleDelete}
              />
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

  ul  {
    display: flex;
    flex-flow:wrap;
    margin: 0 auto;
  }
`







export default Smurfs;
