import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = ({logedIn,setLogedIn}) => {
    const navigate= useNavigate()
  const afterLogout=()=>{
    navigate("/");
    localStorage.removeItem('userlogedin');
    setLogedIn(false)
    console.log('logged out');
      
  }
  return (
    <div className='sticky-top'>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href='/hello'>Homepage</a></li>
                <li><a href='/hello'>Portfolio</a></li>
                <li onClick={afterLogout}><a href="">Logout</a> </li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link to="/"><a className="text-4xl font-bold normal-case ">Music App</a></Link>
        </div>
        {logedIn 

        ?
            <div className="navbar-end">
                <h1 className='uppercase text-2xl font-bold text-blue-700 hidden md:flex mx-4'>{localStorage.getItem('userlogedin')}</h1>
            </div>
        :
        <div className="navbar-end">
            <Link to="/login" className="btn btn-ghost hidden md:flex mx-4">
            Login
            </Link>
            <Link to="/signup" className="btn btn-ghost hidden md:flex mx-4">
            Register
            </Link>
            
        </div>
        }
        </div>
    </div>
  )
}

export default Nav