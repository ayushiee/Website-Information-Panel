import React from 'react';
import {OrgLogo} from './static';
import TopBar from './components/Topbar';
import RowTwo from './components/RowTwo';
import './App.css'

function App() {
  return (
    <div className="App">
        <TopBar data={OrgLogo} />
        <RowTwo />
        
    </div>
  );
}

export default App;
