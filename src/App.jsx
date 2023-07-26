import StatueScene from './pages/locations/StatueScene';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Framer from './pages/Framer';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/statue" element={<StatueScene />} />
        <Route path="/spring" element={<Framer />} />
      </Routes>
    </>
  );
}

export default App;
