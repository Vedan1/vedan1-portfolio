import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { FaDebian } from 'react-icons/fa6'


function Sidebar() {
  return (
    <div className='w-[25rem] h-[42rem] bg-primary border-2 border-primaryB rounded-lg  p-5 flex-col justify-between '>
      <div className='justify-center  items-start flex'>
        <div className='w-[23rem] h-[20rem] bg-red-400 rounded-lg align-top '>
          <img className='w-full h-full object-cover rounded-lg' src="src\assets\image.jpg" />
        </div>
      </div>
      <h1 className='text-xl font-semibold mt-1'>Vedant Pingale</h1>
      <h1 className='text-lg '>Software Developer</h1>
      <div className='w-full h-[2.5rem] rounded-full border-2 border-primaryB  bg-primary my-5 justify-between items-center flex px-5'>
        <div >View Resume</div>
        <FaDownload />
      </div>
      <div className='justify-center  items-start flex'>
        <div className='w-[23rem] h-[10rem] bg-secondary rounded-lg align-top mt-2 p-3 ' >
          <div>
            <div>Tech Stack</div>
            <div className='w-full flex justify-between py-2 mt-2'>
              <FaDebian />
              <FaDebian />
              <FaDebian />
              <FaDebian />
              <FaDebian />
            </div>
          </div>

          <div>
            <div className='mt-2'>Socials</div>
            <div className='w-full flex justify-between py-2 mt-1'>
              <FaDebian />
              <FaDebian />
              <FaDebian />
              <FaDebian />
              <FaDebian />
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Sidebar
