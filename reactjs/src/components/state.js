import React,{Component} from "react";
import Count from './setstate.js';




class Message extends Component {
    constructor(){
      super()
      this.state = {
        Message: 'Happy World'
      }
    }

    ChangeMessage(){
        this.setState({
            Message : 'thank you for subscribing'

        })

        
    }


    render() {
        return(
        <div>
             <div>
                 <h2>{this.state.Message}</h2>
                 <button onClick={()=> this.ChangeMessage()}>subscribe</button>
            </div>
            <div>
                 <Count/>
            </div>

        </div>
            
           
        )
    }
}

export default Message;