import './App.css';
// import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import JobListing from './pages/joblisting/JobListing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
        {/* <Navbar /> */}
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/jobs" element={<JobListing/>} />
        </Routes>
=======
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
