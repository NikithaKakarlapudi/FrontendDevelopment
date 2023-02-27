import './App.css';
import Layout from './layout.js';
import ButtonGrp from './buttonsgroupexample.js';
import CheckboxExm from './checkboxexample.js';
import ComboBox from './muiautocomplete.js';
import FloatingActionButtons from './muifab.js';
import RadioButtonsGroup from './muiradiobuttongroup.js';
import BasicRatingExm from './muirating.js';

import BasicSelectExm from './muiselectexm';
function App() {
  return (
    <div className="App">
      <ButtonGrp></ButtonGrp>
      <CheckboxExm></CheckboxExm>
      <div className="Appdiv">
      <ComboBox></ComboBox>
      <FloatingActionButtons></FloatingActionButtons>
      <RadioButtonsGroup></RadioButtonsGroup>
      <BasicRatingExm></BasicRatingExm>
      <BasicSelectExm></BasicSelectExm>
      </div>

      {/* <Layout></Layout> */}
 
    
    </div>
  );
}

export default App;
