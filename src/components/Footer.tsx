import React from 'react'
import { Link } from 'react-router-dom'
import NotionBar from './Footer/NotionBar'
import CardFooter from './Footer/CardFooter'
import { FaLongArrowAltRight } from "react-icons/fa";

interface Prop {
  add_border?: boolean;
}

const Footer: React.FC<Prop> = ({ add_border = false }) => {
  return (
    <footer className={`flex px-35 py-10 justify-between ${add_border && "border-t border-gray-300"}`}>
      <NotionBar className='w-max-72' />
      <CardFooter title='Company'>
        <Link to="/"><p>About us</p></Link>
        <Link to="/"><p>Careers</p></Link>
        <Link to="/"><p>Security</p></Link>
        <Link to="/"><p>Status</p></Link>
        <Link to="/"><p>Terms & privacy</p></Link>
        <Link to="/"><p>Your privacy rights</p></Link>
      </CardFooter>
      <CardFooter title='Download'>
        <Link to="/"><p>IOS & Android</p></Link>
        <Link to="/"><p>Mac & Windows</p></Link>
        <Link to="/"><p>Mail</p></Link>
        <Link to="/"><p>Calender</p></Link>
        <Link to="/"><p>Web Clipper</p></Link>
      </CardFooter>
      <CardFooter title='Resources'>
        <Link to="/"><p>Help center</p></Link>
        <Link to="/"><p>Pricing</p></Link>
        <Link to="/"><p>Blog</p></Link>
        <Link to="/"><p>Community</p></Link>
        <Link to="/"><p>Integration</p></Link>
        <Link to="/"><p>Templates</p></Link>
        <Link to="/"><p>Partner programs</p></Link>
      </CardFooter>
      <CardFooter title='Notion for' foot={<Link to="/" className='flex items-center'><p className='whitespace-nowrap mr-1.5 font-bold'>Explore more </p><FaLongArrowAltRight/></Link>}>
        <Link to="/"><p>Enterprise</p></Link>
        <Link to="/"><p>Small business</p></Link>
        <Link to="/"><p>Personal</p></Link>
      </CardFooter>
    </footer>
  )
}

export default Footer