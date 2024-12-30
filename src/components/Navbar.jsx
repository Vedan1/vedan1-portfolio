import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="w-full bg-primary p-5">

        <div className="w-full flex flex-row justify-between items-center space-x-6 gap-10">
          <div className="justify-start items-center space-x-6 gap-10 text-xl">
            <img className='w-[60px] h-[60px]' src='src\assets\logoTemp.png' />
          </div>
          <div className="justify-end items-center space-x-6 gap-10">
            <Link to="/" className="hover:underline text-xl">About</Link>
            <Link to="/experience" className="hover:underline  text-xl">Experience</Link>
            <Link to="/project" className="hover:underline  text-xl">Projects</Link>
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
