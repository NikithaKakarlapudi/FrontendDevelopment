
import './App.css';
import BasicTable from './renderingelements.js';
import Message from './components/state'
import PropsCom from './components/destructuring_props_state.js'
import StateCom from './components/destructuring_props_state.js';
import FunctionClick from './components/handling.js';
import UserGreeting from './components/conditionalrendering.js';
import NameList from './components/list_keys.js';

function App() {
  return (
    <div className="App">
       {/* <Message/>  */}
      {/* <PropsCom name="vicky" heroName="prabhas"/>
      <PropsCom name="jai" heroName="prabhas"/>
      <PropsCom name="sivaji" heroName="prabhas"/>

       
      <StateCom name="jai" heroName="prabhas"/>
      <StateCom name="sivaji" heroName="prabhas"/>  */}

      {/* <FunctionClick/> */}

      {/* <UserGreeting/> */}

      <NameList/>

      {/* <h1>
        Function Components and Props
      </h1>
      <h2>
        Simple Text using function and props
      </h2>
      <AddHeader appname={"Nikitha"} color={"red"}/>



      <AddHeader appname={"Anji"} color={"green"}/>
      <AddHeader appname={"Sunny"} color={"blue"}/>
      <h2>
        Implementing Typography variants using function component and props
      </h2>
      <Typography varaint={"h1"} text={"I am header1"} color={"red"}/>
      <Typography varaint={"h6"} text={"I am header6"} color={"green"}/>
      <Typography text={"I am no one"} color={"blue"}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
    {/* <BasicTable/> */}
    {/* <h2>
        Image and color variants using function component and props
      </h2>
    <Footer src={""} nikith={"red"}/>
    <Footer src={"https://th.bing.com/th/id/R.7f689981b7050a848293ef0344f30d33?rik=Ooi2n6Vh4wBGOQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-E9cQt2nvyTc%2fURusPT5VqnI%2fAAAAAAAAABw%2fwU8Q0YrG37M%2fs1600%2ffacebook%2blogo%2b3.png&ehk=%2bfW27pizyZApmGoIvKOHuCku5JHSDG52uNTA6WpkGbM%3d&risl=&pid=ImgRaw&r=0"}/> */} 



    </div>
  );
}


// function AddHeader(props){
  
//   return(
//     <div>
//       <p className='para'>{props.appname}</p>
//     </div>
//   )
// }

// function Typography(props){
//   const color=props.color;
//   if(props.varaint =="h1")
//   {
//     return(
//       <div>
//         <h1 style={{color:color}}>{props.text}</h1>
//         </div>
//     )
//   }
//   else if(props.varaint =="h6")
//   {
//     return(
//       <div>
//         <h6 style={{color:color}}>{props.text}</h6>
//         </div>
//     )
//   }
//   else{
//     return(
//       <div>
//         <p style={{color:color}}>{props.text}</p>
//         </div>
//     )
//   }
  
// }

// function Footer(props){
//   console.log(props.nikith);
//   let imgurl="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png";
//   if(props.src !="")
//   {
//     imgurl = props.src;
//   }
//   let bgColor ="green" ;
//   if(props.nikith !=="undefined")
//   {
//     console.log("not undefined");
//     bgColor = props.nikith;
//   }
 
  
//   return(
//       <div style={{background:bgColor}}>
//            <img width={50} src={imgurl} alt="facebook"/>
           
//       </div>  


//   );
// }



 export default App;
