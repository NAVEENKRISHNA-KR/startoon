import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup'; // Ensure the file name is correct and matches the import
import Login from './Login'; // Ensure the file name is correct and matches the import
import Home from './Home'; // Import the Home component
// import Doctor from './Doctor';
// import Doctor from "./Doctor";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/doctor' element={<Doctor />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
