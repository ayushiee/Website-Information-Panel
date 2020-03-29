import React from 'react';
import {OrgLogo} from './static';
import UpperBanner from './components/UpperBanner';
import LowerBanner from './components/LowerBanner';
import './App.css'

function App() {
  return (
    <div className="App">
        <UpperBanner data={OrgLogo} />
        <LowerBanner />
        
    </div>
  );
}

export default App;
