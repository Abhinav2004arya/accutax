import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Footer from './Components/Footer';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import Navbar from './Components/navbar'
import Home from './Pages/Home'
import ITR1Form from './Components/ITR'
import TaxCalculator from './Components/calculator'
import './App.css';

function App() {
  return (
    
    <Router>
       
      <Routes>
       
      <Route path="/" element={<><Landing /><Footer/></>} />
      <Route path="/login" element = {<Login/>}></Route>
      <Route path="/register" element = {<Signup/>}></Route>
      <Route path="/home" element={<><Navbar/><Home/></>}></Route>
      <Route path="/itr" element={<><Navbar/><ITR1Form/></>}></Route>
      <Route path="/itr-calc" element={<><Navbar/><TaxCalculator/></>}></Route>


      </Routes>
     
    </Router>
  );
}

export default App;
