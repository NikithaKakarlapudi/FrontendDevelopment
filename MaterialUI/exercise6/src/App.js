import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar.js';
import TopBar from './topbar.js';
import TabContent from './content.js';
function App() {
  return (
    <div className="App">
      <Sidebar/> 
     <TopBar/>
     <TabContent/>
    </div>
  );
}

export default App;
