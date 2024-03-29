import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {  useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Home = ({user,logedIn,afterLogout,setLogedIn}) => {

  let navigate = useNavigate();
  const [artist, setArtist] = useState('');
  const [err, setErr] = useState('');
  const [isErr, setisErr] = useState(false);
  const [isLoading, setisLoading] = useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(artist === ""){
      setisErr(true);
      setErr('invalid Input');
    }else{
      if(localStorage.getItem('userlogedin')){
        setisLoading(true)
        const result = artist.trim().replace(/[\s;]+/g, "-")
        console.log(result);
        navigate(`/music/${result}`);
      }else{
        setisErr(true);
        setErr('Please Login First');
      }
    }
  }
  
  return (
      <article>
{isLoading
	?
	<div className='h-screen flex items-center justify-center '><ReactLoading type={"bars"} color={"blue"} height={'8%'} width={'8%'} /></div>
	:

    <section>
      
      <Nav logedIn={logedIn} setLogedIn={setLogedIn} afterLogout={afterLogout} user={user}/>
      <div className="lg:container lg:mx-auto min-h-screen">
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
            
              <input type="text" className="rounded-md border border-indigo-500  px-4 py-2 text-indigo-700 placeholder-indigo-400 backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Search Artist" required onChange={(e)=>{
              setArtist(e.target.value);
              }}/>

              <button  className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2" type='submit' onClick={handleSubmit }>Search</button>
            </form>
            
          {isErr && 
            <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 absolute top-3 right-3 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
      <div className="ml-3 text-sm font-normal">Error! {err}</div>
          <button onClick={()=> setisErr(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
            
          
          }
          
          
        </div>
      </div>


      <Footer/>
        
    </section>
}
    </article>
  )
}

export default Home