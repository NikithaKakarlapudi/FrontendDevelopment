import logo from './logo.svg';
import './App.css';
import LinksExm from './navlink.js';
import MenuExm from './navmenu.js';
import SpeedDialExm from './navspeeddeals.js';
import BasicPaginationExm from './navpagination.js';
import HorizontalLinearStepperExm from './navstepper.js';
// import NavStepperExm from './navexample1.js';
import SwipeableTextMobileStepperExm from './navstepperimg.js';
import BasicTabsExm from './navtabs.js';
import SimpleAccordionExm from './surfaceaccordion.js';
import ButtonAppBarExm from './surfaceappbar.js';
import BottomAppBarExm from './surfaceappbar1.js';
import ComplexInteractionCardsExm from './surfacecards.js';
import SimplePaperExm from './surfacepaper.js';
import AlertsExm from './feedbackalerts.js';
import SimpleDialogExm from './feedbackdialogs.js';
import CircularExm from './feedbakprogress.js';
import VariantsExm from './feebbackskeleton.js';
import SnackbarExm from './feedbacksnackbar.js'; 
import FacebookExm from './feebbackskeleton1.js';
function App() {


  return (
    <div className="App">
      <LinksExm/>
      <MenuExm/>
      <SpeedDialExm/>
      <BasicPaginationExm/>
      <HorizontalLinearStepperExm/>
      {/* <NavStepperExm/> */}
    <SwipeableTextMobileStepperExm/>
    <BasicTabsExm/>
  <SimpleAccordionExm/>
  <br/>
  <ButtonAppBarExm/>
  <br/>
  <BottomAppBarExm/>
  <br/>
  <ComplexInteractionCardsExm/>
      <br/>
      <SimplePaperExm/>
      <br/>
      <AlertsExm/>
      <br/>
      <SimpleDialogExm/>
      <br/>
      <CircularExm/>
      <br/>
      <VariantsExm/>
      <br/>
      <SnackbarExm/>
      <br/>
      <FacebookExm/>
    </div>
  );
}

export default App;
