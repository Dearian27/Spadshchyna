import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BoxSpring from './pages/BoxSpring';
import StatueScene from './pages/locations/StatueScene';
import KolomuyaScene from './pages/locations/KolomuyaScene';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statue" element={<StatueScene />} />
        {/* <Route path="/spring" element={<SpringTest />} /> */}
        <Route path="/kolomuya" element={<KolomuyaScene />} />
        <Route path="/spring" element={<BoxSpring />} />
      </Routes>
    </>
  );
}

export default App;
