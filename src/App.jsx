import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter
import Sidebar from './components/Sidebar/Sidebar';  // Optional: Remove `.jsx` if you prefer
import Login from './pages/Login';

function App() {
  return (
    <div className=''>
      <div className='flex h-sceen w-screen'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
