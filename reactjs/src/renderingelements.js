import React from 'react';
import ReactDOM from 'react-dom/client';



// export default function  BasicFunction(){
//     return(
    
//         <body>
//              <div id="roots"></div>
             
                 
//          </body>

//     );
// }
    

// // const container = document.getElementById('root');
// // const root = ReactDOM.createRoot(container);
// // root.render(<h2>hellooooo</h2>);

 



export default function BasicTable()  {
  
  const myelement = (
    <table>
      <tr>
      <th>Name</th>
      <th>Name</th>
      <th>Name</th>
      </tr>
      <tr>
        <td>nikki</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>nikitha</td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );     
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(myelement);
  
    return(
         <body>
          {myelement}
          </body>
       
    );
  }          