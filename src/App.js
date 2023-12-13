import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
