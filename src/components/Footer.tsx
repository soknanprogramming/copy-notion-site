import React from 'react'
import { Link } from 'react-router-dom'
import NotionBar from './Footer/NotionBar'
import CardFooter from './Footer/CardFooter'

const Footer: React.FC = () => {
  return (
    <footer className='flex border-t border-gray-300'>
        <NotionBar className='w-max-72'/>
        <CardFooter title='Company'>
            <Link to="/"><p>About us</p></Link>
            <Link to="/"><p>Careers</p></Link>
            <Link to="/"><p>Security</p></Link>
            <Link to="/"><p>Status</p></Link>
            <Link to="/"><p>Terms & privacy</p></Link>
            <Link to="/"><p>Your privacy rights</p></Link>
        </CardFooter>
    </footer>
  )
}

export default Footer