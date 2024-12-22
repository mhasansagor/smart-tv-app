import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import Navigation from './Navigation';
import Player from './Player';

function App() {
  const [focusedSection, setFocusedSection] = useState('navigation');

  return (
    <BrowserRouter>
      <div className="flex h-screen ">
        <Navigation focusedSection={focusedSection} setFocusedSection={setFocusedSection} />
          <Routes>
            <Route path="/" element={<Home focusedSection={focusedSection} setFocusedSection={setFocusedSection} />}/>
            <Route path="/player" element={<Player/>} />
          </Routes>
        {/* <div className="flex-1 overflow-y-auto">
        </div> */}
      </div>
    </BrowserRouter>
  );
}
export default App;