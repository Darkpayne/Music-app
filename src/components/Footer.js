import React from 'react'

const Footer = () => {
  return (
<footer className="bg-black flex flex-col items-center justify-center bottom-0 w-[100%] text-white h-28">
<div className="">
    <ul className="flex md:flex-row space-x-5 w-full items-center justify-center">
    <p className=" tracking-tight block cursor-pointer hover:text-red-400 transition-colors duration-300 text-2xl">
        <a target="_blank" href="https://www.instagram.com/life_of_joshh/"><ion-icon name="logo-instagram"></ion-icon></a>
    </p>
    <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-2xl">
        <a target="_blank" href="https://twitter.com/life_of_joosh"><ion-icon name="logo-twitter"></ion-icon></a>
    </p>
    <p className=" tracking-tight block cursor-pointer hover:text-blue-800 transition-colors duration-300 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/joshua-clifford-625604228/"><ion-icon name="logo-linkedin"></ion-icon></a>
    </p>
    <p className=" tracking-tight block cursor-pointer hover:text-white transition-colors duration-300 text-2xl">
        <a href="https://github.com/Darkpayne" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
    </p>
    </ul>
</div>
<p>© 2022 by <span className="text-blue-500 capitalize">Joshua clifford</span> Proudly created by Me</p>
</footer>
  )
}

export default Footer