import React, { Component } from 'react'
import Message from './state';

function FunctionClick(){
  function clickHandler(){
    console.log('Button Click')
  }
    return (
        <div> 
            <h3>handling event</h3>
            <h4>function click </h4>
            <div>
            <button onClick={clickHandler}>click</button>
             </div>
             <div>
                <ClassClick/>
     
             </div>
             <div>
                <h4>binding event handler</h4>
                <EventBind/>
             </div>
        </div>
       
    )
  }


export default FunctionClick;


class ClassClick extends Component{
    clickHandler(){
        console.log('clicked the Button')
    }
    render() {
        return(
            <div>
                <h4>Class Click</h4>
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }

}



class EventBind extends Component{
    constructor(props){
        super(props)

        this.state={
            Message :'click the button'
        }
        //   binding in class constructor
        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         Message :'thank you'
    //     })
    //     console.log('this')
    // }

    clickHandler = () => {
        this.setState({
            Message: 'thank you'
        })
    }
    
    render(){
        return(
             <div>
                <div>{this.state.Message}</div>
                          {/* binding in handler */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

                          {/* arrow function in handler */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}

                      {/* class properties in arrow functions */}
                <button onClick={this.clickHandler}>click</button>
             </div>
        )
    }
}
