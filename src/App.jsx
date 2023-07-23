import { Canvas } from '@react-three/fiber';
import { Background } from './components/Background';
import { AdaptiveDpr, AdaptiveEvents, Html, SoftShadows } from '@react-three/drei';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
