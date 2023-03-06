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
      
    </div>
  );
}

export default App;
