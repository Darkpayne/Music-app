import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Grid from '../components/Grid';

const Home = () => {

  
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
          <div className="flex flex-col items-center mt-12 text-center">
            <span className="relative inline-flex w-full md:w-auto">
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Listen Now
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="lg:container lg:mx-auto mt-9">
        <div className="">
          <h1 className='title p-2'>Spiking Artists</h1>
          {/* <div className="w-full my-4">
				    <div className="h-1 mx-auto bg-indigo-400 w-64 my-0 py-0 rounded-t"></div>
			    </div> */}
            <p className='text-center text-gray-400 text-sm p-2'>These artists are trending globally right now.</p>
            <p className='text-center text-gray-400 text-sm p-2'> one to explore the artist and their similar artists</p>
        </div>
        <Grid/>
      </div>


      <Footer/>
    </>
  )
}

export default Home