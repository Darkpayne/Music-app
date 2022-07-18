import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen bg-black flex justify-center items-center'>
        <div className="">
            <img src="https://walexbiznig.com/fileshare/wl/?id=PL5cpMnzQFQGDRQWyQim5T0UO6O3CWxh&fmode=open" alt="" />
        </div>
        <div className="text-white text-center border-l pl-9 py-5">
            <h1 className='text-5xl'>404</h1>
            <h1 className='mt-3'>Sorry we couldn't find the page you're looking for yet</h1>
            <Link to="/" className='mt-7 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg'> BACK HOME</Link>
        </div>
    </div>
  )
}

export default ErrorPage