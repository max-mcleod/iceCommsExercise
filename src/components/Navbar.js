import React from 'react'

export default function Navbar() {

  return (
    <nav className='flex justify-between xl:mx-32 p-5'>
      <img className='object-none' src="../assets/svg/logo.svg" alt="" />
      <button className='md:hidden block' >
        <img className='w-14 h-14' src="../assets/menu.png" alt="" />
      </button>
      <ul className='navList md:static md:block m-auto hidden absolute'>
        <li><a href="/">STORIES</a></li>
        <li><a href="/">FEATURES</a></li>
        <li><a href="/">PRICING</a></li>
      </ul>
      <button className='md:block hidden p-3 px-7 bg-black text-white font-semibold tracking-widest'>
        GET AN INVITE
      </button>
    </nav>
  )
}
