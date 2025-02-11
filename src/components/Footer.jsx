import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <p className="text-lg">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold font-[Caveat]">Himalayan Roamers</span>
      </p>

      <p className="text-lg flex items-center gap-2">
        Made with <HeartIcon className="h-5 w-5 text-red-500" /> and{" "}
        <span className="font-bold text-yellow-400">JS</span>
      </p>
    </div>
  )
}

export default Footer