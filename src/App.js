import React, {useState} from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import ClubRegistry from './routes/ClubRegistry';
import Modal from './routes/Modal';

function App() {
  return (
      <><Routes>
      <Route path="/clubregistry" element={<ClubRegistry />} />
      <Route path="/" element={<Modal />} />
    </Routes></>
  );
}

export default App;