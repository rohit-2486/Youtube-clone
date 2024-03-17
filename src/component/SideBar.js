import React from 'react'
import { useSelector } from 'react-redux' 
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null;

  return (
    <div className='md:w-[280px] shadow-lg md:py-4 md:px-12 bg-white  mt-16  '>
      <ul>
        <li><Link>Home</Link></li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>

      <h1 className='mt-4 font-bold '>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul> 

      <h1 className='mt-4 font-bold '>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul> 
    </div>
  )
}

export default SideBar