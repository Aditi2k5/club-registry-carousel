import React from 'react';
import {Route, Routes} from "react-router-dom";
import ClubRegistry from './routes/ClubRegistry';
import Modal from './routes/Modal';
import Calendar from './routes/Calendar';

function App() {
  return (
      <><Routes>
      <Route path="/clubregistry" element={<ClubRegistry />} />
      <Route path="/" element={<Modal />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes></>
  );
}

export default App;