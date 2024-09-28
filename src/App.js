import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Footer from './Components/Footer';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import Navbar from './Components/navbar'
import Home from './Pages/Home'
import ITR1Form from './Components/ITR'
import TaxCalculator from './Components/calculator'
import FileUpload from './Pages/FileUpload'
import AboutUs from './Pages/About'
import './App.css';

function App() {
  return (
    
    <Router>
       
      <Routes>
       
      <Route path="/" element={<><Landing /></>} />
      <Route path="/login" element = {<Login/>}></Route>
      <Route path="/register" element = {<Signup/>}></Route>
      <Route path="/home" element={<><Navbar/><Home/></>}></Route>
      <Route path="/itr" element={<><Navbar/><ITR1Form/></>}></Route>
      <Route path="/itr-calc" element={<><Navbar/><TaxCalculator/></>}></Route>
      <Route path="/file" element={<><Navbar/><FileUpload/></>}></Route>
      <Route path="/about" element={<><Navbar/><AboutUs/></>}></Route>

      </Routes>
     
     
    </Router>
  );
}

export default App;
