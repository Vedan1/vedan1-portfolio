import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function ProfileCard() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center w-64">
    <img
      src="/assets/profile-pic.jpg"
      alt="Profile"
      className="w-32 h-32 rounded-full mx-auto mb-4"
    />
    <h2 className="text-2xl font-semibold mb-2">Honest</h2>
    <p className="text-gray-400 mb-4">Product Designer</p>
    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 mb-4">
      View Resume
    </button>
    <div className="flex justify-center space-x-4 text-xl">
      <FaLinkedin className="cursor-pointer hover:text-blue-500" />
      <FaGithub className="cursor-pointer hover:text-gray-300" />
      <FaTwitter className="cursor-pointer hover:text-blue-400" />
      <FaInstagram className="cursor-pointer hover:text-pink-500" />
    </div>
  </div>
  )
}

export default ProfileCard
