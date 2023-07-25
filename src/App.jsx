import StatueScene from './pages/locations/StatueScene';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Globals } from '@react-spring/three';

console.warn = () => {};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/statue" element={<StatueScene />} />
      </Routes>
    </>
  );
}

export default App;
