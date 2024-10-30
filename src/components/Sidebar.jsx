import React from 'react'
import { FaDownload } from 'react-icons/fa'

function Sidebar() {
  return (
    <div className='w-[25rem] h-[40rem] bg-red-200 rounded-lg  p-5 '>
      <div className='justify-center  items-start flex'>
      <div className='w-[23rem] h-[20rem] bg-red-400 rounded-lg align-top '>
      </div>
    </div>
    <h1 className='text-xl mt-1'>Honest</h1>
    <h1 className='text-lg '>Product Designer</h1>
    <div className='w-full h-[2.5rem] rounded-full bg-primary mt-10 justify-between items-center flex px-5'>
      <div >View Resume</div>
      <FaDownload />
    </div>
    <div  className='justify-center  items-start flex'>
    <div  className='w-[23rem] h-[8rem] bg-red-400 rounded-lg align-top mt-2  ' >

    </div>
    </div>
    </div>
    
  )
}

export default Sidebar
