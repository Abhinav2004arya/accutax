import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Footer from './Components/Footer';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import Navbar from './Components/navbar'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<><Landing /><Footer/></>} />
      <Route path="/login" element = {<Login/>}></Route>
      <Route path="/register" element = {<Signup/>}></Route>
      <Route path="/home" element={<Navbar/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
