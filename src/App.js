import './App.css';
// import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import JobListing from './pages/joblisting/JobListing';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
        {/* <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes> */}
>>>>>>> 8f269dbbf92aecc19814c9e631362001853885a6
        <Footer />
    </BrowserRouter>
  );
}

export default App;
