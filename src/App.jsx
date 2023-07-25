import StatueScene from './pages/locations/StatueScene';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Globals } from '@react-spring/three';
import SpringTest from './pages/SpringTest';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/statue" element={<StatueScene />} />
        <Route path="/spring" element={<SpringTest />} />
      </Routes>
    </>
  );
}

export default App;
