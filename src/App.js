import React from 'react';
import Nav from './components/Nav';
import Login from './pages/Login';
import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import Signup from './pages/Signup';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import SinglePage from './pages/SinglePage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/music/:artist" element={ <SinglePage/>} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/signup" element={ <Signup/> } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
