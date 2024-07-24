import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import HospitalCreation from './screens/HospitalCreation';
import HospitalDetails from './screens/HospitalDetails';
import EditHospitalScreen from './screens/EditHospital';
import HospitalListByCity from './screens/HospitalListByCity';
import EditHospital from './components/EditHospital/EditHospital';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-hospital" element={<HospitalCreation />} />
        <Route path="/hospital/:id" element={<HospitalDetails />} />
        <Route path="/edit-hospital/:id" element={<EditHospitalScreen />} />
        <Route path="/hospitals" element={<HospitalListByCity />} />
        <Route path="/edithsptl/:id" element={<EditHospital></EditHospital>} />
        
      </Routes>
    </Router>
  );
}

export default App;
