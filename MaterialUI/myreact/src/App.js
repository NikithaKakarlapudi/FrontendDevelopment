import './App.css';
import Layout from './layout.js';
import ButtonGrp from './buttonsgroupexample.js';
import CheckboxExm from './checkboxexample.js';
import ComboBox from './muiautocomplete.js';
import FloatingActionButtons from './muifab.js';
import RadioButtonsGroup from './muiradiobuttongroup.js';
import BasicRatingExm from './muirating.js';
import ContinuousSlidersExm from './muislider.js';
import BasicSwitchesExm from './muiswitch.js';
import FormpropsTextFields from './muitextfield.js';
import ToggleButtonsExm from './muitogglebuttons.js';
import  BoxComponent from './Layoutbox.js';
import BasicGrid from './grid.js';
import  TransferListExm from './trasnferlist.js';
// import PickersExm from './muidateandtime.js';

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
      <ContinuousSlidersExm></ContinuousSlidersExm>
      <BasicSwitchesExm></BasicSwitchesExm>
      <FormpropsTextFields/>
      <ToggleButtonsExm/>
      < BoxComponent/>
      <BasicGrid/>
      < TransferListExm/>
      {/* <BasicRatingExm></BasicRatingExm> */}
    
      
      </div>

      {/* <Layout></Layout> */}
 
    
    </div>
  );
}

export default App;
