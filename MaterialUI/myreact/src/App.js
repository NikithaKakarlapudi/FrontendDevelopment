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
import StackExm from './stack.js';
import StandardImageListExm from './imagelist.js';
import TitlebarImageListExm from './layoutimagelist.js';
import CustomImageListExm from './layoutimage.js';
import BottomNavigationExm from './bottomnavigation.js';
import BreadcrumbsExm from './navbreadcrumbs.js';
import DrawerExm from './drawercomponents.js';
import ResponsiveDrawer from './drawer.js';
import MiniDrawerExm from './navdrawer.js';
// import PickersExm from './muidateandtime.js';


import BasicSelectExm from './muiselectexm';
function App() {
  return (
    <div className="App">
      <ButtonGrp></ButtonGrp>
      <CheckboxExm></CheckboxExm>
      <div className="Appdiv">
        <BasicRatingExm/>
        <Layout/>
        <BasicSelectExm/>
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
      <StackExm/>
      <StandardImageListExm/>
      <TitlebarImageListExm/>
      <CustomImageListExm/>
      <BottomNavigationExm/>
      <BreadcrumbsExm/>
      <DrawerExm/>
      <ResponsiveDrawer/>
      <MiniDrawerExm/>
      {/* <BasicRatingExm></BasicRatingExm> */}
    
      
      </div>

      {/* <Layout></Layout> */}
 
    
    </div>
  );
}

export default App;
