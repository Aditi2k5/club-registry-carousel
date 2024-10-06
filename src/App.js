import React from 'react';
import {Route, Routes} from "react-router-dom";
import ClubRegistry from './routes/ClubRegistry';
import Homepage from './routes/Homepage';
import Modal from './routes/Modal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Modal />} />
        <Route path="/clubregistry" element={<ClubRegistry />} />
      </Routes>
    <ClubRegistry />
    <Modal />
    </div>
  );
}

export default App;