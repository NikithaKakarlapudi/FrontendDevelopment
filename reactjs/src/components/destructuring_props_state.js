import { Component } from "react";
import React from 'react';


const  PropsCom = props => {
    const {name,heroName} = props
  return (
    <div>
      <h2>destructuring  props and state</h2>
        <div>
        <h5>
        movie name {name}  real name {heroName}
        </h5>
        </div>
        <div>
            <StateCom/>
        </div>
    </div>


  )
}
 export default  PropsCom;



 class StateCom extends Component {
  render(){
      const {name,heroName} = this.props
    return(
      
        <h5>movie {name} real name {heroName} </h5>
      
    )
  }
 }