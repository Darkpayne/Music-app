import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = ({afterLogin}) => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  const [passType1, setPassType1] = useState(true);

  const [isError, setisError] = useState(false)
	const [errMessage, setErrMessage] = useState('')

  var auth = JSON.parse(localStorage.getItem('auth'));

	const handleLogin =(e)=>{
		e.preventDefault();
		if(auth===null){
			alert('no user found')
		}
	

			const same = auth.filter(d=> d.username == username)
			if(same.length !== 0){
       if (same[0].password===password){
        localStorage.setItem('userlogedin', username)
         setUsername('');
         setPassword('');
         afterLogin(username)
         navigate('/');
       }else{
        setisError(true);
				setErrMessage("wrong password");
       }
			}else{
				setisError(true);
				setErrMessage(username + " don't exist");
			}
		}
	


  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Welcome Back
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to access your account
        </div>
        {isError &&
	  	<div  className="alert p-2 alert-error shadow mt-3">
		<div onClick={()=> setisError(false)} className='cursor-pointer'>
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Error! {errMessage}</span>
			</div>
		</div>
		}
        <div className="mt-3">
          <form action="#">
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Username:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <ion-icon name="person"></ion-icon>
                </div>

                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
				          onChange={(e)=> setUsername(e.target.value)}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your Username"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                  <ion-icon name="lock-closed"></ion-icon>
                  </span>
                </div>
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    right-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span onClick={()=>setPassType1(!passType1)} className="cursor-pointer">
                  <ion-icon name={passType1 ? 'eye-off': 'eye'}></ion-icon>
                  </span>
                </div>

                <input
                  id="password"
                  type={passType1 ? 'password' : 'text'}
                  name="password"
                  value={password}
				          onChange={(e)=> setPassword(e.target.value)}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
              onClick={handleLogin}
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Sign In</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>

          </form>

        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          to="/signup"
          className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span className="ml-2"
            >You don't have an account?
            <a
              href="#"
              className="text-xs ml-2 text-blue-500 font-semibold"
              >Register now</a
            ></span
          >
        </Link>
      </div>

    </div>
  )
}

export default Login