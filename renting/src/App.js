import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Navbar/Navbar';
import Signup from  './Register/SignUp'
import Aboutus from './Components/Aboutus'
import Postpage from './Components/Postpage';
import Login from './Login/Login'
  
function App() {

  return (
   <>
    <div>
      {/* Render Navbar */}
      <Navbar />
    
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/postpage/:id" element={<Postpage/>} /> 
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
   </>
  );
}

export default App;

