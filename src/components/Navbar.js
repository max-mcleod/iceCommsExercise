import React from 'react'

export default function Navbar() {

  return (
    <nav className='flex justify-between xl:mx-32 p-5'>
      <img className='object-none' src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo.svg" alt="" />
      <button id="hamburger" className='md:hidden block' >
        <img className='w-14 h-14' src="../assets/menu.png" alt="" />
      </button>
      <ul id="navUL" className='m-auto md:block hidden md:static absolute'>
        <li className='inline font-semibold tracking-widest'><a href="/">STORIES</a></li>
        <li className='inline px-10 font-semibold tracking-widest'><a href="/">FEATURES</a></li>
        <li className='inline font-semibold tracking-widest'><a href="/">PRICING</a></li>
      </ul>
      <button className='md:block hidden p-3 px-7 bg-black text-white font-semibold tracking-widest'>
        GET AN INVITE
      </button>
    </nav>
  )
}
