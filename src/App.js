import './App.css';
import Navbar from './components/navbar/Navbar';
import Navbar from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
