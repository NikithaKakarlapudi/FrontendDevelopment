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
    </div>
  );
}

export default App;
