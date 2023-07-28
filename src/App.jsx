import { Route, Routes } from 'react-router-dom';
import Framer from './pages/Framer';
import Home from './pages/Home';
import KolomuyaScene from './pages/locations/KolomuyaScene';
import KhersonesScene from './pages/locations/KhersonesScene';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spring" element={<Framer />} />
        <Route path="/kolomyia" element={<KolomuyaScene />} />
        <Route path="/khersones" element={<KhersonesScene />} />
      </Routes>
    </>
  );
}

export default App;
