import React,{Component} from "react";




class Count extends Component {
    constructor(props){
      super(props)
      this.state = {
        Count : 0
      }
    }

    increment(){
        this.setState(
            {
            Count : this.state.Count +1
        }
        )
        //   Console.log(this.state.Count)
        }


    render() {
        return(
        <div>
            <h5>setstate count increment</h5>
             <div>
                <div>count - {this.state.Count}</div>
                 <button onClick={()=> this.increment()}>increment</button>
            </div>
            <div>
                
            </div>
        </div>
            
           
        )
    }
}

export default Count;