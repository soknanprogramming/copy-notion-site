import React from 'react'
import ume_logo from "./../../assets/image/logo_ume.png"
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface Prop {
    className?: string;
}

const NotionBar: React.FC<Prop> = ({ className = "" }) => {
  return (
    <div className={`p-2 flex flex-col  ${className}`}>
        <div className='flex items-center text-2xl py-3'>
            <img className='size-9' src={ume_logo} />
            <p className='pl-2'>Notion</p>
        </div>
        <div className='flex gap-2.5 *:size-4 *:text-gray-500'>
            <AiOutlineInstagram className='hover:text-red-600 transition-colors duration-300' />
            <FaXTwitter className='hover:text-black transition-colors duration-300' />
            <FaLinkedin className='hover:text-blue-600 transition-colors duration-300' />
            <FaFacebook className='hover:text-blue-600 transition-colors duration-300' />
            <FaYoutube className='hover:text-red-600 transition-colors duration-300' />
        </div>
        <div>
            <button className='border border-gray-200 px-2 py-1 rounded-lg mt-9 mb-2'>English (US) </button>
        </div>
        <p className='text-sm py-1 text-gray-500'>Cookie settings</p>
        <p className='text-sm py-1 text-gray-500'>© 2026 Notion Labs, Inc.</p>
    </div>
  )
}

export default NotionBar