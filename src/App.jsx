import { Canvas } from '@react-three/fiber';
import { Background } from './components/Background';
import { AdaptiveDpr, AdaptiveEvents, Html, SoftShadows } from '@react-three/drei';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Kolomya } from './components/locations/Kolomya';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/eggs' element={<Kolomya />} />
      </Routes>
    </>
  );
}

export default App;
