import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props){
        super(props)
         this.state = {
            isLoggedIn : false
         }
    }

  render() {
       
    // short circuit operator

    return this.state.isLoggedIn && <div>WellCome My World</div>


            // conditional operators
            
    //  return this.state.isLoggedIn ?(
    //     <div>WellCome  My World </div>
    //  ) :(
    //     <div>WellCome Guest</div>
    //  )




    //  let Message
    //   if (this.state.isLoggedIn){
    //     Message = <div>WellCome My World</div>
    //   } else {
    //     Message = <div>WellCome Guest</div>
    //   }
    //  return <div>{Message}</div>


    // if (this.state.isLoggedIn) {
    //     return <div> WellCome My World  </div>
    // }else {
    //     return <div> Wellcome Guest</div>
    // }
    
  }
}

export default UserGreeting;