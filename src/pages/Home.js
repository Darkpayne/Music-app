import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {  useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();
  const [artist, setArtist] = useState('');

  const handleSubmit=()=>{
    
    navigate(`/music/${artist}`);
  }
  
  return (
    <>
      <Nav/>
      <div className="lg:container lg:mx-auto">
      <div
          className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
          >
            <span className="inline md:block">Listen to Music</span>
            <span
              className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"
              > That Melts the soul
              </span>
          </h1>
          <div
            className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"
          >
            Featuring a mix of popular and classic rock, this album is the perfect gift for any occasion. All the songs are hand-picked by the music professional known as  <span className='relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block text-lg font-medium'>Joshua Clifford</span>
          </div>
          <form className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <input type="text" className="rounded-md border border-indigo-500  px-4 py-2 text-indigo-700 placeholder-indigo-400 backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Search Artist" onChange={(e)=>{
         setArtist(e.target.value);
        }}/>

        <button  className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2" type='submit' onClick={handleSubmit }>Search</button>
      </form>
        </div>
      </div>


      <Footer/>
    </>
  )
}

export default Home