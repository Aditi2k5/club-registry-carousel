import React, {useState} from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import ClubRegistry from './routes/ClubRegistry';
import Modal from './routes/Modal';
import AddClub from './routes/AddClub';


function App() {
  return (
      <><Routes>
      <Route path="/clubregistry" element={<ClubRegistry />} />
      <Route path="/" element={<Modal />} />
      <Route path="/add-club" element={<AddClub />} />
    </Routes></>
  );
}

export default App;