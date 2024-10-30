import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="w-full bg-primary p-5">
          
          <div className="w-full flex flex-row justify-between items-center space-x-6 gap-10">
          <div className="justify-start items-center space-x-6 gap-10 text-xl">
            Hello
          </div>
            <div className="justify-end items-center space-x-6 gap-10">
            <Link to="/" className="hover:underline text-xl">About</Link>
            <Link to="/work" className="hover:underline  text-xl">Work</Link>
            <Link to="/connect" className=" text-xl bg-white text-primary px-4 py-2 rounded-2xl hover:bg-blue-600">
              Let’s Talk
            </Link>
            </div>
    </div>
  </div>
    </div>
  )
}

export default Navbar
