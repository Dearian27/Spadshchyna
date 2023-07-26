import { Route, Routes } from 'react-router-dom';
import Framer from './pages/Framer';
import Home from './pages/Home';
import StatueScene from './pages/locations/StatueScene';
import KolomuyaScene from './pages/locations/KolomuyaScene';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statue" element={<StatueScene />} />
        <Route path="/spring" element={<Framer />} />
        <Route path="/kolomuya" element={<KolomuyaScene />} />
      </Routes>
    </>
  );
}

export default App;
