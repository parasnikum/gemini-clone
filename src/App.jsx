import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Sidebar from './components/Sidebar/Sidebar';  
import Main from './components/Main/Main';

function App() {
  return (
    <div className=''>
      <div className='flex h-sceen w-screen'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
