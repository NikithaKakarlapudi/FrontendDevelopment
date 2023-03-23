import logo from './logo.svg';
import './App.css';
import TopMenuExm from './topbar.js';
import DividerStack from './overview.js';
import Teams from './teams.js';

function App() {
  return (
    <div className="App">
     <TopMenuExm/>
     <DividerStack/>
     <Teams/>
    </div>
  );
}

export default App;
