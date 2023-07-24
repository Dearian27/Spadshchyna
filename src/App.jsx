import { Canvas } from '@react-three/fiber';
import { Background } from './components/Background';
import { AdaptiveDpr, AdaptiveEvents, Html, SoftShadows } from '@react-three/drei';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Kolomya } from './pages/locations/Kolomya';
import SpringTest from './pages/SpringTest';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/eggs' element={<Kolomya />} />
        <Route path='/spring' element={<SpringTest />} />
      </Routes>
    </>
  );
}

export default App;
