import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,  
} from "react-router-dom";
import Signup from './pages/Signup';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import SinglePage from './pages/SinglePage';

function App() {

  const [logedIn, setLogedIn] = useState(false)
  
  const afterSignup = (user) =>{
    console.log(user);
  }

  const afterLogin = () =>{
    setLogedIn(true) 
  }

  const afterLogout=()=>{
   
    localStorage.removeItem('userlogedin');
    setLogedIn(false)
    console.log('logged out');
      
  }

  useEffect(() => {
   const user = localStorage.getItem('userlogedin');
   if (user !== null ){
      setLogedIn(true);
   }
  }, [])

  return (
    <div className="App overflow-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home logedIn={logedIn} setLogedIn={setLogedIn}  afterLogout={afterLogout}/>} />
          <Route path="/music/:result" element={logedIn && <SinglePage logedIn={logedIn} />} />
          <Route path="/login" element={ <Login afterLogin={afterLogin}/>} />
          <Route path="/signup" element={ <Signup afterSignup={afterSignup}/> } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
