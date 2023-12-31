import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import JobListing from './pages/joblisting/JobListing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';
import Workercard from './pages/workercard/Workercard';
import CreateJob from './pages/createJob/CreateJob';

function App() {
  return (
    <BrowserRouter>
    
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/jobs" element={<JobListing/>} />
          <Route path="/userdashboard" element={<Workercard/>} />
          <Route path="/createjob" element={<CreateJob/>} />
        </Routes>
        <Footer /> 
    </BrowserRouter>
  );
}

export default App;
